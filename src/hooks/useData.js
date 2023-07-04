import React, { createContext, useContext, useEffect, useState } from "react";
// import Axios from "axios";
import { REQUEST_URL, USERID } from "../services/variables";

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
  const [manageError, setManageError] = useState("Erreur récup URL");

  // SWITCH TEST MODE (used mock)
  const [testMode, setTestMode] = useState(true);

  useEffect(() => {
    if (!testMode) {
      setManageError("");
      // Axios.get(`${REQUEST_URL}${USERID}`)
      //   .then((res) => {
      //     const data = res.data.data;
      //     setUser({
      //       id: data.id,
      //       ...data.userInfos,
      //     });
      //     setUserInfos({
      //       todayScore: data.todayScore,
      //       ...data.keyData,
      //     });
      //   })
      //   .catch((err) => {
      //     console.error("error: ", err);
      //     setManageError(`L'erreur s'est produite sur la route /${USERID}`);
      //   });
      // Axios.get(`${REQUEST_URL}${USERID}/average-sessions`)
      //   .then((res) => {
      //     const data = res.data.data;
      //     setAverageSession(data.sessions);
      //   })
      //   .catch((err) => {
      //     console.error("error: ", err);
      //     setManageError(
      //       `L'erreur s'est produite sur la route /${USERID}/average-sessions`
      //     );
      //   });
      // Axios.get(`${REQUEST_URL}${USERID}/performance`)
      //   .then(async (res) => {
      //     const data = res.data.data;
      //     let tmp = await Promise.all(
      //       data.data.map((el) => {
      //         return {
      //           value: el.value,
      //           name: data.kind[el.kind],
      //         };
      //       })
      //     );
      //     setPerf(tmp);
      //   })
      //   .catch((err) => {
      //     console.error("error: ", err);
      //     setManageError(
      //       `L'erreur s'est produite sur la route /${USERID}/performance`
      //     );
      //   });
      // Axios.get(`${REQUEST_URL}${USERID}/activity`)
      //   .then(async (res) => {
      //     const data = res.data.data.sessions;
      //     let tmp = await Promise.all(
      //       data.map((el) => {
      //         return {
      //           ...el,
      //         };
      //       })
      //     );
      //     setActivity(tmp);
      //   })
      //   .catch((err) => {
      //     console.error("error: ", err);
      //     setManageError(
      //       `L'erreur s'est produite sur la route /${USERID}/activity`
      //     );
      //   });
    } else {
      // MOCK
      (async () => {
        // TO DO: Change fetch to axios and format correctly data & remove comment
        //
        // const dataUser = await fetch("./../services/mock.json");
        // setUser(dataUser);
        // const dataActivity = await fetch("./../services/mock.json");
        // setActivity(dataActivity);
        // const dataAverage = await fetch("./../services/mock.json");
        // setUser(dataAverage);
        // const dataPerf = await fetch("./../services/mock.json");
        // setUser(dataPerf);
      })();
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        userInfos,
        averageSession,
        perf,
        activity,
        manageError,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
