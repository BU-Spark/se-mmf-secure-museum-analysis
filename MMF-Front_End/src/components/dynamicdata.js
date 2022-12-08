import React, { useState } from 'react';
import generateData from "./generateData";
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';


export const renderGraphs = (dummy_data,categories,graphData,setChartOptions) => {
    let j=0;
    dummy_data.forEach((data,index) => {
        console.log("Render",data);
        if(typeof data === 'object')
        {
            let newArray= Object.keys(data);
            for(j=0;j<newArray.length;j++)
            {
            console.log(data[newArray[j]])
            graphData.push(data[newArray[j]]);
            setChartOptions(data[newArray[j]])
            categories.push(newArray[j]);
            }
        }
        else
        {
            graphData.push(data);
            setChartOptions()
            categories.push("Question "+ index);
        }
        // generateData(categories,graphData);
        setChartOptions({ 
            xAxis :{
                categories :categories
            },
          series: [
              { data: graphData}
            ]
        });
    })


}