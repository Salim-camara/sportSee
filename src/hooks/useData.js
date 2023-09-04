import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";
import Mock from "./../services/mock.json";
import { IS_TESTMODE, REQUEST_URL, USERID } from "../services/variables";
import PerformanceData from "../services/dataFormater/performanceData";
import CheckFieldNameData from "../services/dataFormater/checkFieldNameData";
import RadarData from "../services/dataFormater/radarData";
import InfoCardData from "../services/dataFormater/infoCardData";
import CircleData from "../services/dataFormater/circleData";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

// This component fetch all app data and dispatch it in all childrens components using the React hook " useContext "
// To retrieve data in children component, call useData hook and bring constants you need
// For more info about useContext, please check https://legacy.reactjs.org/docs/hooks-reference.html#usecontext

const DataContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [averageSession, setAverageSession] = useState(null);
  const [activity, setActivity] = useState(null);
  const [perf, setPerf] = useState(null);
  const [radarData, setRadarData] = useState(null);
  const [miniCard, setMiniCard] = useState(null);
  const [circleData, setCircleData] = useState(null);
  const [manageError, setManageError] = useState("Erreur récup URL");

  // SWITCH TEST MODE (used mock)
  const testMode = IS_TESTMODE;

  useEffect(() => {
    if (!testMode) {
      setManageError("");
      Axios.get(`${REQUEST_URL}${USERID}`)
        .then((res) => {
          const data = res.data.data;
          setUser({
            id: data.id,
            ...data.userInfos,
          });
          let tmp = {
            todayScore: new CheckFieldNameData(data).score,
            ...data.keyData,
          };
          setUserInfos(tmp);
          setMiniCard(new InfoCardData(tmp).data);
          setCircleData(new CircleData(tmp).data);
        })
        .catch((err) => {
          console.error("error: ", err);
          setManageError(`L'erreur s'est produite sur la route /${USERID}`);
        });
      Axios.get(`${REQUEST_URL}${USERID}/average-sessions`)
        .then((res) => {
          const data = res.data.data;
          setAverageSession(data.sessions);
        })
        .catch((err) => {
          console.error("error: ", err);
          setManageError(
            `L'erreur s'est produite sur la route /${USERID}/average-sessions`
          );
        });
      Axios.get(`${REQUEST_URL}${USERID}/performance`)
        .then(async (res) => {
          const data = res.data.data;
          let tmp = await Promise.all(
            data.data.map((el) => {
              return new PerformanceData(el.value, data.kind[el.kind]);
            })
          );
          setPerf(tmp);
          setRadarData(new RadarData(tmp).data);
        })
        .catch((err) => {
          console.error("error: ", err);
          setManageError(
            `L'erreur s'est produite sur la route /${USERID}/performance`
          );
        });
      Axios.get(`${REQUEST_URL}${USERID}/activity`)
        .then(async (res) => {
          const data = res.data.data.sessions;
          let tmp = await Promise.all(
            data.map((el) => {
              return {
                ...el,
              };
            })
          );
          setActivity(tmp);
        })
        .catch((err) => {
          console.error("error: ", err);
          setManageError(
            `L'erreur s'est produite sur la route /${USERID}/activity`
          );
        });
    } else {
      (async () => {
        setManageError("");
        setUser(Mock?.user?.data?.userInfos);
        let tmpUserInfos = {
          todayScore: Mock?.user?.data?.todayScore,
          ...Mock?.user?.data?.keyData,
        };
        setUserInfos(tmpUserInfos);
        setCircleData(new CircleData(tmpUserInfos).data);
        setMiniCard(new InfoCardData(tmpUserInfos).data);
        setActivity(Mock?.activity?.data?.sessions);
        setAverageSession(Mock?.activity?.averagesessions?.data?.sessions);
        let tmpPerf = await Promise.all(
          Mock?.activity?.performance?.data?.data?.map((el) => {
            return {
              value: el.value,
              name: Mock?.activity?.performance?.data?.kind[el.kind],
            };
          })
        );
        setPerf(tmpPerf);
        setRadarData(new RadarData(tmpPerf).data);
      })();
    }
  }, [testMode]);

  return (
    <DataContext.Provider
      value={{
        user,
        userInfos,
        averageSession,
        perf,
        activity,
        manageError,
        radarData,
        miniCard,
        circleData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
