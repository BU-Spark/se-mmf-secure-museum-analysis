export const updateData = (dummy_data,graphData,categories,setChartOptions) => {
    let i=1;let j=1;
    console.log(Object.keys(dummy_data[3][1]));
    for(i=1;i<=Object. keys(dummy_data).length;i++)
    {
      if(typeof dummy_data[i] === 'object')
      {
        let newArray= Object.keys(dummy_data[i]);
        for(j=0;j<newArray.length;j++)
        {
          console.log(dummy_data[i][newArray[j]])
           graphData.push(dummy_data[i][newArray[j]]);
           categories.push(newArray[j]);
        }
      }
      else{
        graphData.push(dummy_data[i]);
        categories.push("Question "+ i);
      }
      console.log('GraphData',graphData)
    }
    console.log(categories)
    setChartOptions({ 
      xAxis :{
          categories :categories
      },
    series: [
        { data: graphData}
      ]
  });
  }