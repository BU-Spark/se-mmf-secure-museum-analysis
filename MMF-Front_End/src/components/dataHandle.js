//cheeck for the data from the set of objects in the API Response
export const objectData = (data,graphData,categories) => {
    let j=0;
    data.dataSet.forEach((data) => {
        let newArray= Object.keys(data);
        for(j=0;j<newArray.length;j++)
        {
           graphData.push(data[newArray[j]]);
           categories.push(newArray[j]);
        //    typeof newArray[j] === "string" ? categories.push("Question "+ newArray[j]) :
        }
        console.log(graphData.length)
    })    
}

// Retrieving data from the API
// export const getDataset = (data) => {
//     let graphData = [];
//     data.data.forEach((dataset) => {
//         console.log(dataset);
//         graphData.push(dataset);
//     })
//     return graphData;
// }

//Title of the Question
export const getTitle = (data) => {
    return data.questionName;
}

//Checks for the subtitle for the particular question
export const checksubTitle = (data,graphData) => {
     if(graphData.length === 1 && data.graphType !== 'line')
     {
         return "The data cannot be plotted with the given graph Type. Using the standard bar graph"
     }

}

//Checks for the graph type for the responses to be displayed
export const getGraphType = (data) => {
    return data.graphType;
}

//Checks for the question type
export const getQuestionType = (data) => {
    return data.questionType;
}

//Another method for iterating through array of obejcts
export const arrayData = (data,graphData,categories,index,setgraphType) => {
    graphData.push(data);
    categories.push("Question "+ index);
}


// //Hard-Coded method for checking the graph type. This is for reference purposes
// export const checkGraphType = (graphData) => {
//     if(graphData.length === 1)
//     {
//         return 'bar';
//     }
//     else if (graphData.length >5){
//         return 'area';
//     }
//     else{
//         return 'spline';
//     }
// }
