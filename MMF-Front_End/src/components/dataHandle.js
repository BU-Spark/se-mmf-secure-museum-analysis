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

export const getDataset = (data) => {
    let graphData = [];
    data.data.forEach((dataset) => {
        console.log(dataset);
        graphData.push(dataset);
    })
    return graphData;
}

export const getTitle = (data) => {
    return data.questionName;
}

export const getGraphType = (data) => {
    return data.graphType;
}

export const getQuestionType = (data) => {
    return data.questionType;
}

export const arrayData = (data,graphData,categories,index,setgraphType) => {
    graphData.push(data);
    categories.push("Question "+ index);
}

export const checkGraphType = (graphData) => {
    if(graphData.length === 1)
    {
        return 'bar';
    }
    else if (graphData.length >5){
        return 'area';
    }
    else{
        return 'spline';
    }
}
