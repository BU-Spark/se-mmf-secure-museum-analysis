# Data Generation for graphs

## Currently: 
- Only generates data for first 15 questions on [excel sheet](https://docs.google.com/spreadsheets/d/1l-831rVtQ0gDN6RcPKvq0eqro_KvWgNK/edit#gid=1400163921): 

## Setup 
1. Install [json-server](https://github.com/typicode/json-server)
2. Inside the data-gen directory, run `json-server server.js`. 
3. GET endpoint is hosted at http://localhost:3000/allAggregates 

## Add to generator
To add to the generator, you need to add to the list questionList at the bottom of generator.js. The "function" key holds a function to generate data, so put the necessary function name there. 
