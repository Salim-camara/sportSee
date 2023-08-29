import React, { useEffect, useState } from "react";
import {
  Radar,
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";
import RadarData from "../../services/dataFormater/radarData";

const ChartRadar = () => {
  const { perf } = useData();
  const data = perf && new RadarData(perf).data;
  const [outerRadius, setOuterRadius] = useState(80);
  const CustomPolarGrid = () => null;

  const handleResize = (e) => {
    if (e >= 1400) {
      setOuterRadius(80);
    } else if (e >= 1200 && e < 1400) {
      setOuterRadius(65);
    } else if (e < 1200) {
      setOuterRadius(45);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize(window.innerWidth));
  }, []);

  return (
    <div className="chartRadar">
      <div
        style={{
          height: "20%",
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ResponsiveContainer width={"50%"} height={"50%"}>
          <RadarChart
            outerRadius={outerRadius}
            // width={730}
            // height={250}
            data={data}
            overflow={"visible"}
          >
            <PolarGrid
              radialLines={null}
              grid={CustomPolarGrid}
              numOctaves={6}
            />
            <PolarAngleAxis
              dataKey="name"
              fontSize={10}
              tick={{ fill: "white" }}
            />
            <Radar
              dataKey="value"
              //   stroke="#8884d8"
              fill="red"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartRadar;
