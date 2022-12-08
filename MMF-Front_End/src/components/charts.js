import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import generateData from './generateData';
import { dummy_data } from '../data/data1';
import { dummy_data1 } from '../data/dataset2';
import { renderGraphs } from './dynamicdata';
import { objectData , arrayData , checkGraphType, getDataset, getTitle, getGraphType } from './dataHandle';

useEffect = () => {
  // Render data from API
}
export const LineChart = () => {
  let graphData = [];
  let categories = [];
  // renderGraphs(dummy_data,categories,graphData)
  // console.log("categories",categories,"GraphData",graphData);
  // const [chartOptions, setChartOptions] = useState({
  //   title: {text : "Museums Go Forward"},
  //   xAxis: {
  //     categories: categories,
  //   },
  //   series: [
  //     { data: graphData }
  //   ],
  //   plotOptions: {
  //     series: {
  //       point: {
  //         events: {
  //           mouseOver(e){
  //             // setHoverData(e.target.category)
  //           }
  //         }
  //       }
  //     }
  //   }
    
  // });
  return (
    <React.Fragment>
    <div class="container">
      <div className="header-main">
      <h1 className="header">Museums Moving Forward</h1>
      <img src=""></img>
      </div>
       <div className="graph-display">
       {dummy_data1.map((data, index) => {
         graphData=[];categories=[];
         typeof data === 'object' ? objectData(data,graphData,categories) : arrayData(data,graphData,categories,index)
         console.log("GraphData",graphData , "Categories",categories)
         //  generateData(dummy_data,categories,graphData,setChartOptions);

         return (
            <>
               <HighchartsReact
                highcharts={Highcharts}
                options={{
                  chart: {
                    type: getGraphType(data),
                    panning: true
                },
                colors: ['#DB843D', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
                         '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
                  title: {text :data.questionName},
                  xAxis: {
                    categories: categories,
                  },
                  series: [
                    { data: graphData }
                  ],
                  plotOptions: {
                    series: {
                      point: {
                        events: {
                          mouseOver(e){
                            // setHoverData(e.target.category)
                          }
                        }
                      }
                    }
                  },
                }}
              />
            </>
          )
        }
        )
        }
        {console.log("GraphData",graphData , "Categories",categories)}
        {/* <button onClick={getdata} className="graph-button">Update Series</button> */}
       
      </div>
      
     </div>
     </React.Fragment>
     
      
    )
}