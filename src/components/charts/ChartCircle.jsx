import React from "react";
import { Legend, RadialBarChart, RadialBar, Tooltip } from "recharts";

const ChartCircle = () => {
  const data = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
    },
  ];
  return (
    <div className="chartCircle">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={360}
        endAngle={0}
      >
        <RadialBar
          minAngle={150}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
};

export default ChartCircle;
