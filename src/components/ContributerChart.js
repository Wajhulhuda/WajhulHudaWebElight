import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
const options = {
  title: {
    text: "Contributors Changes",
  },
  yAxis: {
    title: {
      text: "Counts",
    },
  },
  xAxis: {
    title: {
      text: "Weeks",
    },
  },
  series: [
    {
      name: "Contributor1",
      data: [100, 200, 30, 300, 2, 4, 5, 345, 76],
    },
    {
      name: "Contributor2",
      data: [23, 5, 64, 56, 333, 5, 77, 222, 9],
    },
    {
      name: "Contributor3",
      data: [77, 22, 67, 223, 56, 33, 90, 34],
    },
  ],
};

const ContributerChart = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </div>
  );
};

export default ContributerChart;
