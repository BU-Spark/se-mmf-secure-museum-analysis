import { dummy_data } from "../data/example_data";

/**
 * This function should perform all the work required to 
 * retrieve data and decode it as needed. It should return
 * data in a JSON format as specified below.
 * 
 * This function can be called to update the progress indicator on the website.
 * It takes one argument which is an integer between 0 and 100.
 * @param {Function} update_progress_indicator
 * 
 * @returns JSON in the following format:
 * 
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
 */
async function get_data_and_decode(update_progress_indicator) {
  // Fake progress
  for (let index = 0; index < 10; index++) {
    await sleep(1000);
    update_progress_indicator((index + 1) * 10);
  }
  // Dummy data as an example
  return dummy_data;
}

// For demo only
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
