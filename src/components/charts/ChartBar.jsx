import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ChartBar = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
  ];
  return (
    <div className="chartBar">
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={true} />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#020203"
          barSize={7}
          style={{ borderRadius: 50 }}
        />
        <Bar dataKey="uv" fill="#FF0101" barSize={7} />
      </BarChart>
    </div>
  );
};

export default ChartBar;
