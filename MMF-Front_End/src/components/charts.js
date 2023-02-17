import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { colors } from "./colorRender";
import {
  objectData,
  arrayData,
  getTitle,
  getGraphType,
  checksubTitle,
} from "./dataHandle";

/**
 *
 * @param {{data: Object}} data
 * @returns
 */
export const LineChart = ({ data }) => {
  let graphData = [];
  let categories = [];
  return (
    <>
      <div className="container">
        <div className="graph-display">
          {data.map((data, index) => {
            graphData = [];
            categories = [];
            typeof data === "object"
              ? objectData(data, graphData, categories)
              : arrayData(data, graphData, categories, index);
            // console.log("GraphData", graphData, "Categories", categories);
            return (
              <>
                <HighchartsReact
                  key={index}
                  highcharts={Highcharts}
                  options={{
                    chart: {
                      type: getGraphType(data),
                      panning: true,
                    },
                    colors: colors,
                    title: {
                      text: getTitle(data),
                    },
                    xAxis: {
                      categories: categories,
                    },
                    credits: {
                      text: "BU SPARK",
                      href: "https://www.bu.edu/spark/author/buspark/",
                    },
                    subtitle: {
                      text: checksubTitle(data, graphData),
                    },
                    exporting: {
                      showTable: true,
                      buttons: {
                        contextButton: {
                          enabled: true,
                        },
                      },
                    },
                    series: [{ data: graphData }],
                    plotOptions: {
                      series: {
                        point: {
                          events: {
                            mouseOver(e) {
                              // setHoverData(e.target.category)
                            },
                          },
                        },
                      },
                    },
                  }}
                />
              </>
            );
          })}
          {/* {console.log("GraphData", graphData, "Categories", categories)} */}
        </div>
      </div>
    </>
  );
};
