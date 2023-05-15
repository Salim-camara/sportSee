import React from "react";
import { Legend, RadialBarChart, RadialBar, Tooltip } from "recharts";

const ChartCircle = () => {
  const data = [
    {
      fill: "transparent",
      value: 100,
    },
    {
        name: "18-24",
        fill: "#FF0101",
        value: 30,
      },
  ];
  return (
    <div className="chartCircle">
        <p className="chartCircle--score">Score</p>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="60%"
        outerRadius="90%"
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar
          minAngle={15}
        //   clockWise={true}
          dataKey="value"
          cornerRadius={50}
        />
      </RadialBarChart>
      <div className="chartCircle__text">
        <p className="chartCircle__text--title">30%</p>
        <p className="chartCircle__text--subTitle">de votre <br />objectif</p>
      </div>
    </div>
  );
};

export default ChartCircle;