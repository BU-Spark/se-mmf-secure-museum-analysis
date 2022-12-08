import { renderGraphs } from "./dynamicdata";

function generateData(dummy_data,categories,graphData,k) {
    // let i=0;let j=0;
    // for(i=1;i<Object.keys(dummy_data).length;i++)
    // {
    //   if(typeof dummy_data[i] === 'object')
    //   {
    //     let newArray= Object.keys(dummy_data[i]);
    //     for(j=0;j<newArray.length;j++)
    //     {
    //     //   console.log(dummy_data[i][newArray[j]])
    //        graphData.push(dummy_data[i][newArray[j]]);
    //        categories.push(newArray[j]);
    //     }
    //   }
    //   else{
    //     graphData.push(dummy_data[i]);
    //     categories.push("Question "+ i);
    //   }

    // }
    let j=0;let i=0;
    // dummy_data.forEach((data,index) => {
    //     console.log("Render",data);
    //     if(typeof data === 'object')
    //     {
    //         let newArray= Object.keys(data);
    //         for(j=0;j<newArray.length;j++)
    //         {
    //         console.log(data[newArray[j]])
    //         graphData.push(data[newArray[j]]);
    //         categories.push(newArray[j]);
    //         }
    //     }
    //     else
    //     {
    //         graphData.push(data);
    //         categories.push("Question "+ index);
    //     }
    //     // renderGraphs(categories,graphData);

    // });
    for(i=k;i<i+1;)
    {
        if(typeof dummy_data[i] === 'object')
      {
        let newArray= Object.keys(dummy_data[i]);
        for(j=0;j<newArray.length;j++)
        {
        //   console.log(dummy_data[i][newArray[j]])
           graphData.push(dummy_data[i][newArray[j]]);
           categories.push(newArray[j]);
        }
      }
      else{
        graphData.push(dummy_data[i]);
        categories.push("Question "+ i);
      }
    }
};


export default generateData;