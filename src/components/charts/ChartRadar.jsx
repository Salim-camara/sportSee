import React from "react";
import {
    Legend,
    Radar,
    PolarRadiusAxis,
    PolarAngleAxis,
    PolarGrid,
    RadarChart,
  } from "recharts";

const ChartRadar = () => {
  const data = [
    {
      subject: "Intensité",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Vitesse",
      A: 98,
      fullMark: 150,
    },
    {
      subject: "Force",
      A: 86,
      fullMark: 150,
    },
    {
      subject: "Endurance",
      A: 99,
      fullMark: 150,
    },
    {
      subject: "Energie",
      A: 85,
      fullMark: 150,
    },
    {
      subject: "Cardio",
      A: 65,
      fullMark: 150,
    },
  ];
  return (
    <div className="chartRadar">
      <RadarChart outerRadius={90} width={258} height={263} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" fontSize={12} fontWeight={'900'} stroke="white" strokeWidth={0} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
        <Radar
          name="mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default ChartRadar;
