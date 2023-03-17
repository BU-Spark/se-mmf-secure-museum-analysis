import { dummy_data } from "../data/example_data";
import $ from "jquery";
import forge from "node-forge";
const jiffClientInstance = new window.JIFFClient(
  "localhost",
  "someid",
  "options" // Optional?
);
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

async function getResultMessage(sessionIn, participationCodeIn) {
  return $.ajax({
    type: "POST",
    url: "/get_result_messages",
    contentType: "application/json",
    data: JSON.stringify({ session: sessionIn, userkey: participationCodeIn }),
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
  clientId
) {
  console.log(jiffClientInstance);
  await getResultMessage(sessionId, clientId).then(function (resultmessages) {
    console.log("retrieved the result-messages");
    console.log(resultmessages);
    setEncryptedData(resultmessages);
  });

  return 0;
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
    if (source == "server") {
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

    // for (let j = 0; j< shareNames.length; j++) {
    //   update_progress_indicator((.95*j)/shareNames);
    //   resultShares[question] = {};

    //   for(cohort of Object.keys(serverSharesAsStrings[question])) {
    //       resultShares[question][cohort] = {};
          
    //     for(filter of Object.keys(serverSharesAsStrings[question][cohort])) {
    //       resultShares[question][cohort][filter] = [];
          
    //       for (let i = 0; i<serverSharesAsStrings[question][cohort][filter].length;i++) {
    //         // Temporary hack to deal with unresolved promises.  TODO GABE FIX
    //         if(serverSharesAsStrings[question][cohort][filter][i].includes("promise")) {
    //           continue;
    //         }
    //         // (1) Parse the shares
    //         // (2) Run reconstruct
    //         // (3) push into the appropriate place in the data structure
    //         resultShares[question][cohort][filter].push(jiff.hooks.reconstructShare(jiff,
    //           [
    //             parseShare(jiff, serverSharesAsStrings[question][cohort][filter][i], "server"),
    //             parseShare(jiff, analystSharesAsStrings[question][cohort][filter][i], "analyst")
    //             ]
    //         ));
    //       }
    //     }
    //   }
    // }
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
    return -1;
  }

  var symmetricKey = keyGen(sessionId, clientId, password);
  console.log(symmetricKey);

  var serverMessages = JSON.parse(encrypted_shares.servermessages);
  var encryptedAnalystMessages = JSON.parse(encrypted_shares.analystmessages);

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

  console.log(JSON.parse(analystMessages));

  // PARSE THESE MESSAGES AND RECONSTRUCT THE SHARES
  var reconstructedResults = reconstructClientResults(serverMessages, analystMessages, update_progress_indicator);

  // pull down all of the overall results that aren't just about us. 

  // pull down the data thats about just me

  //Iterate through the visualization array
  // var charts = [];
  // var chartid = 1;
  // for (vis of template_table.visualization) {
  //   let chart = {};
  //   chart["labels"] = vis["labels"];
  //   chart["questionType"] = vis["questionType"];
  //   chart["graphType"] = vis["graphType"];
  //   chart["questionName"] = vis["questionName"];
  //   chart["dataSet"] = [];
  //   for (let i = 0; i < vis["series"].length; i++) {
  //     let datapoints = [];
  //     for (let j = 0; j < vis["data"].length; j++) {
  //       let datapoint = vis["data"][j];
  //       // Look up the actual data point in the data structure
  //       datapoints.push(reconstructedResults[datapoint.output][vis["series"][i]][datapoint.value]);
  //     }
  //   }
  //   chart["dataSet"].push({"name": vis["seriesLabel"][i], "data":datapoints})
  //   chart["id"] = chartid;
  //   chartid = chartid + 1;
  // }

  setDecryptedData(dummy_data);
  return 0;
}
