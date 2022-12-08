export const objectData = (data,graphData,categories,setgraphType) => {
    let j=0;
    let newArray= Object.keys(data);
        for(j=0;j<newArray.length;j++)
        {
        //   console.log(data[newArray[j]])
           graphData.push(data[newArray[j]]);
           categories.push(newArray[j]);
        //    typeof newArray[j] === "string" ? categories.push("Question "+ newArray[j]) :
        }
        console.log(graphData.length)
        
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