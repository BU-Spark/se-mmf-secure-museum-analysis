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
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

/**
 *
 * @param {{data: Object}} data
 * @returns
 */
export const LineChart = ({ data }) => {
  let graphData = [];
  let categories = [];

  const generate_graph_section = (section) => {
    // Build sections of graphs with the specified title
    const calculate_grid_size = (item_count) => {
      // Hacky function so that the grid always fills the users screen.
      return 12;
      if (item_count === 1) {
        return 12;
      } else if (item_count === 2) {
        return 6;
      } else if (item_count === 3) {
        return 4;
      } else {
        return 4;
      }
    };
    const gridSizeMd = calculate_grid_size(section.charts.length);
    return (
      <>
        <br />
        <Typography variant="h3" align="center">
          {section.section_title}
        </Typography>
        <br />
        <Grid
          container
          spacing={4}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {section.charts.map((data, index) => {
            graphData = [];
            categories = [];
            typeof data === "object"
              ? objectData(data, graphData, categories)
              : arrayData(data, graphData, categories, index);
            // console.log("GraphData", graphData, "Categories", categories);
            return (
              <Grid xs={12} md={gridSizeMd}>
                <HighchartsReact
                  key={index}
                  highcharts={Highcharts}
                  containerProps={{ style: { width: "100%" } }}
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
                      categories: data.labels,
                      labels: {
                          allowOverlap: true,
                        },
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
                    series: data.dataSet,
                    plotOptions: {
                      series: {
                        dataLabels: {
                          allowOverlap: true,
                        },
                        bar: {
                          dataLabels: {
                            allowOverlap: true,
                          },
                        },
                        point: {
                          events: {
                            mouseOver(e) {
                              // setHoverData(e.target.category)
                            },
                          },
                        },
                      },
                      bar: {
                        dataLabels: {
                          allowOverlap: true,
                        },
                      },
                    },
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  };

  // Actually return things
  return data.map((section, index) => {
    return generate_graph_section(section);
  });
};