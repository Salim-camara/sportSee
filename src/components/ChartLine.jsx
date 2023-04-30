import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const ChartLine = () => {
  const data = [
    {
      name: "L",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "M",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "M",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
        name: "J",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "V",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "S",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "D",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
  ];
  
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  return (
    <div className="chartLine" style={{ width: 258, height: 263 }}>
        <p className="chartLine--title" >Durée moyenne des sessions</p>
      <div className="chartLine--chart">
        <LineChart
          width={368}
          height={150}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="transparent"/>
          <XAxis dataKey="name" axisLine={false} tick={false} strokeOpacity={0}/>
          <YAxis tick={false} axisLine={false}/>
          <Line type="monotone" dataKey="pv" stroke="white" dot={false}/>
        </LineChart>
      </div>
      <div className="chartLine--darkenBg"></div>
      <div className="chartLine__days">
        {days.map(el => <p>{el}</p>)}
      </div>
    </div>
  );
};

export default ChartLine;
