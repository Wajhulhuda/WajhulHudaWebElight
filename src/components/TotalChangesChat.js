import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
const options = {
  title: {
    text: "Total Changes",
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
      name: "Changes",
      data: [100, 200, 30, 300, 2, 4, 5, 345, 76],
    },
  ],
};

const TotalChangesChat = () => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </div>
  );
};

export default TotalChangesChat;
