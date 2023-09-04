import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { useData } from "../../hooks/useData";

const ChartCircle = () => {
  const { userInfos, circleData } = useData();
  const [load, setLoad] = useState(false);
  const [circle, setCircle] = useState([]);

  useEffect(() => {
    setLoad(true);
    setCircle(circleData);
  }, [userInfos, circleData]);

  return (
    <div className="chartCircle">
      <p className="chartCircle--score">Score</p>
      {load && (
        <ResponsiveContainer width={"100%"} aspect={1}>
          <RadialBarChart
            innerRadius="60%"
            outerRadius="90%"
            data={load && circle}
            startAngle={90}
            endAngle={450}
          >
            <RadialBar minAngle={15} dataKey="value" cornerRadius={50} />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
      {userInfos && (
        <div className="chartCircle__text">
          <p className="chartCircle__text--title">
            {circle && circle[1]?.value}%
          </p>
          <p className="chartCircle__text--subTitle">
            de votre <br />
            objectif
          </p>
        </div>
      )}
    </div>
  );
};

export default ChartCircle;
