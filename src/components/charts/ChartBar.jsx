import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../hooks/useData";
import DataFormater from "../../services/dataFormater";

const ChartBar = () => {
  const { user, activity } = useData();
  const CustomToolTip = ({ data }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          height: 100,
          width: 70,
          border: "none",
        }}
      >
        <p
          style={{ margin: 0, color: "white", fontSize: 13, marginBottom: 10 }}
        >
          {" "}
          {data?.payload[0]?.value} kg
        </p>
        <p style={{ margin: 0, color: "white", fontSize: 13, marginTop: 10 }}>
          {" "}
          {data?.payload[1]?.value} Kcal
        </p>
      </div>
    );
  };

  return (
    <div className="chartBar">
      <div className="chartBar__topContainer">
        <p className="chartBar__topContainer--title">Activité quotidienne</p>
        <div className="chartBar__topContainer__rightInfo">
          <div className="chartBar__topContainer__rightInfo__weightContainer">
            <div className="chartBar__topContainer__rightInfo__weightContainer--dot"></div>
            <p className="chartBar__topContainer__rightInfo--text">
              Poids (kg)
            </p>
          </div>
          <div className="chartBar__topContainer__rightInfo__caloriesContainer">
            <div className="chartBar__topContainer__rightInfo__caloriesContainer--dot"></div>
            <p className="chartBar__topContainer__rightInfo--text">
              Calories brûlées (kCal)
            </p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={250}>
        <BarChart data={activity}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={(e) => {
              return DataFormater.BarGetIndex(activity, e);
            }}
            tick={true}
          />
          <YAxis orientation="right" />
          <Tooltip content={(e) => <CustomToolTip data={e} />} />
          <Bar
            dataKey="kilogram"
            fill="#020203"
            barSize={7}
            style={{ borderRadius: 50 }}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#FF0101"
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <div className="chartBar--leftHideBar"></div>
      <div className="chartBar--rightHideBar"></div>
    </div>
  );
};

export default ChartBar;
