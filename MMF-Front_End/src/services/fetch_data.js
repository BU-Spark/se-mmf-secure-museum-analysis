import { dummy_data } from "../data/example_data";
import $ from "jquery";
import forge from "node-forge";
import JIFFClient from "../jiff-lib/jiff-client";
// import jiff_bignumber from "../jiff/ext/jiff-client-bignumber";
// import jiff_client_restful from "../jiff/ext/jiff-client-restful";
// import jiff from "jiff-mpc";


/**
 * Helper function used to pull down the relevant results messages from the server
 * 
 * @param {string} sessionIn
 * @param {string} participationCodeIn
 */

async function getResultMessage(sessionIn,participationCodeIn) {
  return $.ajax({
    type: 'POST',
    url: '/get_result_messages',
    contentType: 'application/json',
    data: JSON.stringify({session: sessionIn, userkey: participationCodeIn})
  }).then(function (resp) {
    // console.log(JSON.parse(resp);
    return resp;
  }).catch(function (err) {
    if (err && err.hasOwnProperty('responseText') && err.responseText !== undefined) {
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
    await getResultMessage(sessionId,clientId).then( function(resultmessages) {
      console.log("retrieved the result-messages");
      console.log(resultmessages);
      setEncryptedData(
        resultmessages
      );
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
  var derivedKey = forge.util.createBuffer(forge.pkcs5.pbkdf2("password:" + password.trim(), "sessionID:" + sessionID + "participantID:" +  participantID, 25000, 16));
  return derivedKey;
};

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
    var decipher = forge.cipher.createDecipher('AES-GCM', symmetricKey); 
    
    decipher.start({
            iv: forge.util.createBuffer(atob(ciphertextStruct.iv)),
            additionalData: ciphertextStruct.ad, // optional
            tag: forge.util.createBuffer(atob(ciphertextStruct.tag)) // authentication tag from encryption
          });

    decipher.update(forge.util.createBuffer(atob(ciphertextStruct.ciphertext)));
    var pass = decipher.finish();
    if(pass) {
      // outputs decrypted hex
      return decipher.output.data;
    } else {
      throw new Error('Error: Invalid Decryption.  Tag failed to verify');
    }
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
    analystMessages = decryptMessageWithSymmetricKey(symmetricKey,encryptedAnalystMessages);
  } catch (err) {
    update_progress_indicator(100);
    return -1;
  }

  console.log(JSON.parse(analystMessages));

  //Iterate through the visualization array
  // int id = 0
  // for ( visualization of template_table.visualization) {
  //   hichart = {};
  //   hichart["labels"] = visualization["labels"]
  //   hichart["dataSet"] = []
  //   for each series {
  //    datapoints = []
  //    for each datapoint {
  //       datapoints.push(lookup the data)
  //      hichart["dataSet"].push({"name": seriesLabel, "data":datapoints})
  //      }
  //    }
  //   hichart["questionType"] = visualization["questionType"]
  //   hichart["graphType"] = visualization["graphType"]
  //   hichart["questionName"] = visualization["questionName"]
  //   hichart["id"] = id
  //    id ++
  //  
  // }

  // PARSE THESE MESSAGES AND RECONSTRUCT THE SHARES
  // var reconstructedResults = clientController.reconstructClientResults(serverMessages,analystMessages);

  setDecryptedData(dummy_data);
  return 0;
}
