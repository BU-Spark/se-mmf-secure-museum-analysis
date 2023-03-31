import { dummy_data } from "../data/example_data";
import { staff_data } from "../data/all_museums";
import { table_template } from "../data/table_template";
import $ from "jquery";
import forge from "node-forge";
const jiffClientInstance = new window.JIFFClient(
  "",
  "",
  {autoConnect: false}
);
const bigNumberOptions = {
      Zp: "618970019642690137449562111", // Must be set to a prime number! Currently 2^89-1
      safemod: false,
    };
window.jiff_bignumber.dependencies({ BigNumber: window.BigNumber })
jiffClientInstance.apply_extension(window.jiff_bignumber, bigNumberOptions);
// import { initialize } from "../jiff-client.js";
// import JIFFClient from "../jiff-lib/jiff-client";
// const JIFFClient = require("../jiff-client");
// const jiffClientInstance = JIFFClient("localhost", "someid", "options");
// import jiff_bignumber from "../jiff/ext/jiff-client-bignumber";
// import jiff_client_restful from "../jiff/ext/jiff-client-restful";
// import jiff from "jiff-mpc";

/**
 * Helper function used to pull down the relevant results messages from the server
 *
 * @param {string} sessionIn
 * @param {string} participationCodeIn
 */

async function getResultMessage(sessionIn, participationCodeIn, accessCode) {
  return $.ajax({
    type: "POST",
    url: "/get_result_messages",
    contentType: "application/json",
    data: JSON.stringify({ session: sessionIn, userkey: participationCodeIn, accesscode: accessCode.trim() }),
  })
    .then(function (resp) {
      // console.log(JSON.parse(resp);
      return resp;
    })
    .catch(function (err) {
      if (
        err &&
        err.hasOwnProperty("responseText") &&
        err.responseText !== undefined
      ) {
        // alertHandler.error(err.responseText);
        console.log(err.responseText);
      }
    });
}

/**
 * This function is meant to download data from the server.
 *
 * Values returned by this function are important to the correct operation of the website.
 *
 * This function passed can be called to update the progress indicator on the website.
 * It takes one argument which is an integer between 0 and 100.
 * @param {Function(number) => void} update_progress_indicator
 *
 * This function should be called once the data has been retrieved.
 * This sets the data in the global state and updates the website.
 * @param {Function(string)} setEncryptedData
 * @param {string} sessionId
 * @param {string} clientId
 *
 * @returns {number} 0 if successful, -1 if download error
 *
 */
export async function download_data(
  update_progress_indicator,
  setEncryptedData,
  sessionId,
  clientId,
  accessCode
) {
  let resultmessages = await getResultMessage(sessionId, clientId, accessCode);
  // await getResultMessage(sessionId, clientId).then(function (resultmessages) {
  //   console.log("retrieved the result-messages");
  //   console.log(resultmessages);
  //   setEncryptedData(resultmessages);
  // });

  if(resultmessages.success != "true") {
    return -2;
  } else {
    setEncryptedData(resultmessages);
    return 0;
  }
}

/**
 * Helper function to help generate the symmetric key from the password
 *
 * Relies on forge
 *
 * @param {string} salt
 * @param {string} password
 *
 */
function keyGen(sessionID, participantID, password) {
  // return pki.generateKeyFromPassword("sessionID:" + sessionID + "participantID:" +  participantID, "password:" + password.trim());
  var derivedKey = forge.util.createBuffer(
    forge.pkcs5.pbkdf2(
      "password:" + password.trim(),
      "sessionID:" + sessionID + "participantID:" + participantID,
      25000,
      16
    )
  );
  return derivedKey;
}

// /**
//  * Helper function to help decrypt the ciphertext struct using a given symmetric key
//  *
//  * Relies on forge
//  *
//  * @param {string} symmetricKey
//  * @param {string} ciphertextStruct
//  *
//  */
function decryptMessageWithSymmetricKey(symmetricKey, ciphertextStruct) {
  var decipher = forge.cipher.createDecipher("AES-GCM", symmetricKey);

  decipher.start({
    iv: forge.util.createBuffer(atob(ciphertextStruct.iv)),
    additionalData: ciphertextStruct.ad, // optional
    tag: forge.util.createBuffer(atob(ciphertextStruct.tag)), // authentication tag from encryption
  });

  decipher.update(forge.util.createBuffer(atob(ciphertextStruct.ciphertext)));
  var pass = decipher.finish();
  if (pass) {
    // outputs decrypted hex
    return decipher.output.data;
  } else {
    throw new Error("Error: Invalid Decryption.  Tag failed to verify");
  }
}


  function parseShare(jiff, shareString, source) {
    let value = jiff.helpers.BigNumber(shareString.substring(shareString.indexOf("share:")+7, shareString.indexOf("Holders: ")-2));
    let holders = JSON.parse(shareString.substring(shareString.indexOf("Holders: ")+9, shareString.indexOf("Threshold: ")-2));
    let threshold = JSON.parse(shareString.substring(shareString.indexOf("Threshold: ")+11, shareString.indexOf("Zp: ")-2));
    let zp = shareString.substring(shareString.indexOf("Zp: ")+4, shareString.length-1);
    let toReturn = new jiff.SecretShare(value, holders, threshold, zp);
    if (source === "server") {
      toReturn.sender_id = "1"
    } else {
     toReturn.sender_id = "s1"
    }
    return toReturn;
  };


  var reconstructClientResults = function(serverSharesAsStrings, analystSharesAsStrings, update_progress_indicator) {

    //Create a dummy jiff instance
    // jiffClientInstance

    // Create a structure to hold the results
    var resultShares = {};

    var shareNames = Object.keys(serverSharesAsStrings).sort();

    for (let j = 0; j< shareNames.length; j++) {
      let question = shareNames[j];
      update_progress_indicator((.95*j)/shareNames);
      resultShares[question] = {};

      for(let cohort of Object.keys(serverSharesAsStrings[question])) {
          resultShares[question][cohort] = {};
          
        for(let filter of Object.keys(serverSharesAsStrings[question][cohort])) {
          if(filter === "nofilter") {
            resultShares[question][cohort][filter] = [];

            for (let i = 0; i<serverSharesAsStrings[question][cohort][filter].length;i++) {
              // Temporary hack to deal with unresolved promises.  TODO GABE FIX
              if(serverSharesAsStrings[question][cohort][filter][i].includes("promise")) {
                console.log("UHOH WE HIT A PROMISE");
                continue;
              }
              // (1) Parse the shares
              // (2) Run reconstruct
              // (3) push into the appropriate place in the data structure
              resultShares[question][cohort][filter].push(jiffClientInstance.hooks.reconstructShare(jiffClientInstance,
                [
                  parseShare(jiffClientInstance, serverSharesAsStrings[question][cohort][filter][i], "server"),
                  parseShare(jiffClientInstance, analystSharesAsStrings[question][cohort][filter][i], "analyst")
                  ]
              )["c"][0]);
            }
          } else {
            resultShares[question][cohort][filter] = {};

            for (let opt of Object.keys(serverSharesAsStrings[question][cohort][filter]).sort()) {
              resultShares[question][cohort][filter][opt] = [];
              for (let i = 0; i<serverSharesAsStrings[question][cohort][filter][opt].length;i++) {
                // Temporary hack to deal with unresolved promises.  TODO GABE FIX
                if(serverSharesAsStrings[question][cohort][filter][opt][i].includes("promise")) {
                  console.log("UHOH WE HIT A PROMISE");
                  continue;
                }
                // (1) Parse the shares
                // (2) Run reconstruct
                // (3) push into the appropriate place in the data structure
                resultShares[question][cohort][filter][opt].push(jiffClientInstance.hooks.reconstructShare(jiffClientInstance,
                  [
                    parseShare(jiffClientInstance, serverSharesAsStrings[question][cohort][filter][opt][i], "server"),
                    parseShare(jiffClientInstance, analystSharesAsStrings[question][cohort][filter][opt][i], "analyst")
                    ]
                )["c"][0]);
              }
            }
          }
        }
      }
    }
    console.log(resultShares);
    return resultShares;
  };




/**
 * This function takes the encrypted shares in the form of a string and decrypts them.
 * 
 * Values returned by this function are important to the correct operation of the website.
 * 
 * 
 * @param {string} encrypted_shares 
 * @param {string} password
 * // This parameter function can be called to update the progress indicator. Expected values are 0-100
 * @param {Function(number) => void} update_progress_indicator 
 * // Once the data has been decrypted, this function should be called to update the global state.
 * // It takes one parameter which is the decrypted data. See below for expected format.
 * @param {Function(Object) => void} setDecryptedData
 * JSON Object should be in the following format:
 * [{
        "id": <unique id, integer>,
        "dataSet": [
          {
            "Key -- can be anything": number
          }
        ],
        "questionName": "Name of the question",
        "graphType": "bar/radio/area/spline",
        "questionType": "number/checkbox/radio"
    }]

    Also see src/data/example_data.js for an example.


 * @returns {number} 0 if successful, -1 if incorrect password, -2 if other error
 */
export async function decrypt_data(
  encrypted_shares,
  password,
  sessionId,
  clientId,
  setDecryptedData,
  update_progress_indicator
) {
  if (password === "") {
    setDecryptedData(staff_data);
    return 0;
  }

  var symmetricKey = keyGen(sessionId, clientId, password);
  // console.log(symmetricKey);

  var serverMessages = JSON.parse(encrypted_shares.servermessages);
  var encryptedAnalystMessages = JSON.parse(encrypted_shares.analystmessages);
  var usercohort = encrypted_shares.cohort;

  // console.log("serverMessages");
  // console.log(serverMessages);
  // console.log("encryptedAnalystMessages");
  // console.log(encryptedAnalystMessages);

  var analystMessages = "";

  try {
    analystMessages = decryptMessageWithSymmetricKey(
      symmetricKey,
      encryptedAnalystMessages
    );
  } catch (err) {
    update_progress_indicator(100);
    return -1;
  }

  // console.log("analystMessages");
  // console.log(JSON.parse(analystMessages));

  analystMessages = JSON.parse(analystMessages)

  // PARSE THESE MESSAGES AND RECONSTRUCT THE SHARES
  var reconstructedResults = reconstructClientResults(serverMessages, analystMessages, update_progress_indicator);

  // pull down all of the overall results that aren't just about us. 

  // pull down the data thats about just me

  // console.log(table_template);
  // console.log("reconstructedResults");
  // console.log(reconstructedResults);

  var datatovisualize = [];
  //Iterate through the visualization array
  var chartid = 1;
  for (let sec of table_template.visualization) {
    let sectopush = {};
    sectopush.section_title = sec.section_title;
    // sectopush.charts = [];
    var charts = [];
    for (let vis of sec.charts) {
      // console.log(vis);
      let chart = {};
      chart["labels"] = vis["labels"];
      chart["questionType"] = vis["questionType"];
      chart["graphType"] = vis["graphType"];
      chart["questionName"] = vis["questionName"];
      chart["dataSet"] = [];
      for (let i = 0; i < vis["series"].length; i++) {
        if (vis["series"][i] === "tag" || vis["series"][i] === "nofilter") {
          continue;
        }
        let datapoints = [];


        if (vis["questionType"] === "staff-special-discrimination") {

          // 030-discrimination-total

          // Compute all the scores
          // let allscorenumerator = 0;
          // let allscoredenom = 0;
          // let mennumerator = 0;
          // let mendenom = 0;
          // let notmennumerator = 0;
          // let notmendenom = 0;
          // let whitenumerator = 0;
          // let whitedenom = 0;
          // let notwhitenumerator = 0;
          // let notwhitedenom = 0;

          datapoints.push(reconstructedResults["030-discrimination-total"][usercohort]["nofilter"][1]/reconstructedResults["030-discrimination-total"][usercohort]["nofilter"][0]);
          datapoints.push(reconstructedResults["030-discrimination-total"][usercohort]["nofilter"][2]/reconstructedResults["030-discrimination-total"][usercohort]["nofilter"][0]);
          datapoints.push(reconstructedResults["030-discrimination-total"][usercohort]["nofilter"][3]/reconstructedResults["030-discrimination-total"][usercohort]["nofilter"][0]);

          // add the 1 for men
          datapoints.push(1);

          let menyespercentage = reconstructedResults["030-discrimination-total"][usercohort]["filterGenderMan"][1][1] / reconstructedResults["030-discrimination-total"][usercohort]["filterGenderMan"][1][0];
          let notmenyespercentage = reconstructedResults["030-discrimination-total"][usercohort]["filterGenderMan"][2][1] / reconstructedResults["030-discrimination-total"][usercohort]["filterGenderMan"][2][0];

          datapoints.push(notmenyespercentage/menyespercentage);

          // add the 1 for white
          datapoints.push(1);

          let whiteyespercentage = reconstructedResults["030-discrimination-total"][usercohort]["filterRaceAndEthnicityWhite"][1][1] / reconstructedResults["030-discrimination-total"][usercohort]["filterRaceAndEthnicityWhite"][1][0];
          let notwhiteyespercentage = reconstructedResults["030-discrimination-total"][usercohort]["filterRaceAndEthnicityWhite"][2][1] / reconstructedResults["030-discrimination-total"][usercohort]["filterRaceAndEthnicityWhite"][2][0];

          datapoints.push(whiteyespercentage/notwhiteyespercentage);

        } else if (vis["questionType"] === "staff-special-culturescore") {

          // Compute all the scores
          let allscorenumerator = 0;
          let allscoredenom = 0;
          let mennumerator = 0;
          let mendenom = 0;
          let notmennumerator = 0;
          let notmendenom = 0;
          let whitenumerator = 0;
          let whitedenom = 0;
          let notwhitenumerator = 0;
          let notwhitedenom = 0;

          for (let j = 0; j< (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"].length/7); j++) {
              allscoredenom = allscoredenom + (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j]);
              mendenom = mendenom + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j]);
              notmendenom = notmendenom + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j]);
              whitedenom = whitedenom + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j]);
              notwhitedenom = notwhitedenom + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j]);
              
              // Positively phrased questions.  In this case, 4 and 5 are worth 1 point, 4 and 5 are -1 point
              if(j == 0 || j == 2 || j == 3 || j == 5 || j == 8 || j == 10 || j == 11) {
                allscorenumerator = allscorenumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+1]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+2]);
                allscorenumerator = allscorenumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+4]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+5]);
                mennumerator = mennumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+1]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+2]);
                mennumerator = mennumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+4]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+5]);
                notmennumerator = notmennumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+1]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+2]);
                notmennumerator = notmennumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+4]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+5]);
                whitenumerator = whitenumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+1]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+2]);
                whitenumerator = whitenumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+4]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+5]);
                notwhitenumerator = notwhitenumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+1]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+2]);
                notwhitenumerator = notwhitenumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+4]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+5]);
              } else { // neg phrased questions.  In this case, 1 and 2 are worth 1 point, 4 and 5 are 1 point
                // j == 1 || j == 4 || j == 6 || j == 7 || j == 9 || j == 12
                allscorenumerator = allscorenumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+1]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+2]);
                allscorenumerator = allscorenumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+4]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["nofilter"][7*j+5]);
                mennumerator = mennumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+1]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+2]);
                mennumerator = mennumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+4]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][1][7*j+5]);
                notmennumerator = notmennumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+1]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+2]);
                notmennumerator = notmennumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+4]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterGenderMan"][2][7*j+5]);
                whitenumerator = whitenumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+1]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+2]);
                whitenumerator = whitenumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+4]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][1][7*j+5]);
                notwhitenumerator = notwhitenumerator + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+1]) + (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+2]);
                notwhitenumerator = notwhitenumerator - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+4]) - (reconstructedResults["045-org-culture-matrix"][usercohort]["filterRaceAndEthnicityWhite"][2][7*j+5]);
              }
          }

          datapoints.push(allscorenumerator/allscoredenom);
          let menscore = mennumerator/mendenom;
          let notmenscore = notmennumerator/notmendenom;
          datapoints.push(1);
          datapoints.push(notmenscore/menscore);
          let whitescore = whitenumerator/whitedenom;
          let notwhitescore = notwhitenumerator/notwhitedenom;
          datapoints.push(1);
          datapoints.push(allscorenumerator/allscoredenom);


        } else if(vis["questionType"] === "staff-special-satisfactionscore") {

          // Compute all the scores
          let allscorenumerator = 0;
          let allscoredenom = 0;
          let mennumerator = 0;
          let mendenom = 0;
          let notmennumerator = 0;
          let notmendenom = 0;
          let whitenumerator = 0;
          let whitedenom = 0;
          let notwhitenumerator = 0;
          let notwhitedenom = 0;

          for (let j = 0; j< reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["nofilter"].length; j++) {
            if(j%6 == 0) {
              allscoredenom = allscoredenom + (5*reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["nofilter"][j]);
              mendenom = mendenom + (5*reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterGenderMan"][1][j]);
              notmendenom = notmendenom + (5*reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterGenderMan"][2][j]);
              whitedenom = whitedenom + (5*reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterRaceAndEthnicityWhite"][1][j]);
              notwhitedenom = notwhitedenom + (5*reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterRaceAndEthnicityWhite"][2][j]);
            } else {
              let points = j%6;
              allscorenumerator = allscorenumerator + (points *reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["nofilter"][j]);
              mennumerator = mennumerator + (points *reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterGenderMan"][1][j]);
              notmennumerator = notmennumerator + (points *reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterGenderMan"][2][j]);
              whitenumerator = whitenumerator + (points *reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterRaceAndEthnicityWhite"][1][j]);
              notwhitenumerator = notwhitenumerator + (points *reconstructedResults["028-staff-satisfaction-satisfaction"][usercohort]["filterRaceAndEthnicityWhite"][2][j]);
            }
          }

          datapoints.push(allscorenumerator/allscoredenom);
          let menscore = mennumerator/mendenom;
          let notmenscore = notmennumerator/notmendenom;
          datapoints.push(1);
          datapoints.push(notmenscore/menscore);
          let whitescore = whitenumerator/whitedenom;
          let notwhitescore = notwhitenumerator/notwhitedenom;
          datapoints.push(1);
          datapoints.push(allscorenumerator/allscoredenom);

        } else if(vis["questionType"] === "parity") {

          // First do the "all category"
          for (let j = 0; j < vis["data"].length; j++) {
            let datapoint = vis["data"][j];
            datapoints.push(reconstructedResults[datapoint.numerator.output][usercohort]["nofilter"][datapoint.numerator.value-1]/reconstructedResults[datapoint.denominator.output][usercohort]["nofilter"][datapoint.denominator.value-1]);
          }

          // Now iterate through the parity scores we need to compute
          for(let j=0; j<vis["parityFilters"].length; j++) {
            let datapoint = vis["data"][0]; // TODO hack
            // Baseline is always the [1] category
            datapoints.push(1);
            // now add the parity between the two options in the filter
            // Option 1 is the baseline
            let baseline = reconstructedResults[datapoint.numerator.output][usercohort][vis["parityFilters"][j]][1][datapoint.numerator.value-1]/reconstructedResults[datapoint.denominator.output][usercohort][vis["parityFilters"][j]][1][datapoint.denominator.value-1];
            let comparison = reconstructedResults[datapoint.numerator.output][usercohort][vis["parityFilters"][j]][2][datapoint.numerator.value-1]/reconstructedResults[datapoint.denominator.output][usercohort][vis["parityFilters"][j]][2][datapoint.denominator.value-1];
            let toadd = comparison/baseline;
            if(isNaN(toadd) || ! isFinite(toadd)) {
              datapoints.push(1);
            } else {
              datapoints.push(toadd);
            }
            
          }

          chart["dataSet"].push({"name": vis["seriesLabel"][i], "data":datapoints})

        } else {

          for (let j = 0; j < vis["data"].length; j++) {
            let datapoint = vis["data"][j];

            if (vis["scale"] != undefined) {
              reconstructedResults[datapoint.output][usercohort]["nofilter"][datapoint.value-1] = reconstructedResults[datapoint.output][usercohort]["nofilter"][datapoint.value-1]/vis["scale"];
            }

            if (vis["normalize"]==="local") { //TODO double check we aren't off by one
              datapoints.push(reconstructedResults[datapoint.output][usercohort]["nofilter"][datapoint.value-1]/reconstructedResults[datapoint.output][usercohort]["nofilter"][0]);
            } else if (vis["normalize"]==="indirect") {
              datapoints.push(reconstructedResults[datapoint.output][usercohort]["nofilter"][datapoint.value-1]/reconstructedResults[vis["normalize_location"]["output"]][usercohort]["nofilter"][vis["normalize_location"]["value"]-1]);
            } else {
              datapoints.push(reconstructedResults[datapoint.output][usercohort]["nofilter"][datapoint.value-1]);
            }
          }
          // Normalize these
          if(vis["normalize"]==="direct") {
            let total = 0;
            for (let d of datapoints) {
              total = total + d;
            }
            for(let j = 0; j<datapoints.length; j++) {
              datapoints[j] = datapoints[j]/total;
            }
          }

          chart["dataSet"].push({"name": vis["seriesLabel"][i], "data":datapoints})

        }

      }
      chart["id"] = chartid;
      chartid = chartid + 1;

      // Look through all of the public data to find the correct data to add to the charts
      for (let staffsec of staff_data) {
        for (let staffchart of staffsec.charts) {
        // console.log("looking for " + chart["questionName"]);
          if(chart["questionName"] === staffchart["questionName"]) {
            // Go get all the relevant tag data
            for(let datastream of staffchart["dataSet"]) {
              if (datastream["name"] === "All Museums" || table_template.cohorts[usercohort].tags.includes(datastream["name"]) ) {
                chart["dataSet"].push(datastream);
              }
            }
          }
        }
      }
      charts.push(chart);
    }
    sectopush.charts = charts;
    datatovisualize.push(sectopush);
  }

  setDecryptedData(datatovisualize);
  return 0;
}
