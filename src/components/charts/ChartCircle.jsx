import React, { useEffect, useState } from "react";
import {
  Legend,
  RadialBarChart,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";
import DataFormater from "../../services/dataFormater";

const ChartCircle = () => {
  const { userInfos } = useData();
  const [formatedData, setFormatedData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, [userInfos]);

  return (
    <div className="chartCircle">
      <p className="chartCircle--score">Score</p>
      {load && (
        <ResponsiveContainer width={"100%"} aspect={1}>
          <RadialBarChart
            innerRadius="60%"
            outerRadius="90%"
            data={load && DataFormater.Circle(userInfos)}
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
            {DataFormater.Circle(userInfos)[1]?.value}%
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
