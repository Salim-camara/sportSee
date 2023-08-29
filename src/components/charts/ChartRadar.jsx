import React from "react";
import {
  Legend,
  Radar,
  PolarRadiusAxis,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";
import DataFormater from "../../services/dataFormater";

const ChartRadar = () => {
  const { perf } = useData();
  const data = perf && DataFormater.Radar(perf);
  const CustomPolarGrid = () => null;
  const dataTest = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <div className="chartRadar">
      <div
        style={{
          height: "50%",
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <RadarChart
            outerRadius={90}
            width={730}
            height={250}
            data={data}
            overflow={"visible"}
          >
            <PolarGrid radialLines={false} grid={CustomPolarGrid} />
            <PolarAngleAxis
              dataKey="name"
              fontSize={10}
              tick={{ fill: "white" }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={null} />
            <Radar
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartRadar;
