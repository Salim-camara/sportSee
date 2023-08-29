import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";

const ChartLine = () => {
  const { averageSession } = useData();
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  const CustomTooltips = ({ data }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          height: 50,
          width: 70,
          border: "none",
        }}
      >
        <p style={{ margin: 0, color: "black", fontSize: 13 }}>
          {`${data?.payload[0]?.payload?.sessionLength} min`}
        </p>
      </div>
    );
  };

  return (
    <div className="chartLine">
      <p className="chartLine--title">Durée moyenne des sessions</p>
      <div className="chartLine--chart">
        <ResponsiveContainer width={"135%"} aspect={2}>
          <LineChart data={averageSession}>
            <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tick={false}
              strokeOpacity={0}
            />
            <Tooltip
              content={(e) => {
                return <CustomTooltips data={e} />;
              }}
            />
            <YAxis tick={false} axisLine={false} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chartLine--darkenBg"></div>
      <div className="chartLine__days">
        {days.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default ChartLine;
