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
import { useData } from "../../hooks/useData";

const ChartLine = () => {
  const { averageSession } = useData();
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  const CustomTooltips = (e) => <p style={{ color: "black" }}>{e}</p>;

  return (
    <div className="chartLine" style={{ width: 258, height: 263 }}>
      <p className="chartLine--title">Durée moyenne des sessions</p>
      <div className="chartLine--chart">
        <LineChart
          width={368}
          height={150}
          data={averageSession}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tick={false}
            strokeOpacity={0}
          />
          <Tooltip formatter={CustomTooltips} />
          <YAxis tick={false} axisLine={false} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            dot={false}
          />
        </LineChart>
      </div>
      <div className="chartLine--darkenBg"></div>
      <div className="chartLine__days">
        {days.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default ChartLine;
