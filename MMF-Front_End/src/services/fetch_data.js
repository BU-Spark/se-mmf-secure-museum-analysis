import { dummy_data } from "../data/example_data";

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
  // Fake progress
  for (let index = 0; index < 10; index++) {
    await sleep(200);
    update_progress_indicator((index + 1) * 10);
  }
  setEncryptedData(
    "dummy string that should be filled with actual string of encrypted shares"
  );
  return 0;
}

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
  setDecryptedData,
  update_progress_indicator
) {
  // Fake progress
  for (let index = 0; index < 10; index++) {
    await sleep(200);
    update_progress_indicator((index + 1) * 10);
  }
  // More dummy testing
  if (password === "password") {
    setDecryptedData(dummy_data);
    return 0;
  }
  if (password === "") {
    return -1;
  }
  return -2;
}

// For demo only
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
