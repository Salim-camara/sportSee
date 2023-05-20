import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";
import { REQUEST_URL, USERID } from "../services/variables";


export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const DataContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [averageSession, setAverageSession] = useState(null);
  const [tmp, setTmp] = useState()

  useEffect(() => {
    Axios.get(`${REQUEST_URL}${USERID}`)
      .then((res) => {
        const data = res.data.data;
        setUser({
            id: data.id,
            ...data.userInfos
        })
        setUserInfos({
            todayScore: data.todayScore,
            ...data.keyData
        })
      })
      .catch((err) => console.error("error: ", err));

      Axios.get(`${REQUEST_URL}${USERID}/average-sessions`)
      .then((res) => {
        const data = res.data.data;
        setAverageSession(data.sessions)
      })
      .catch((err) => console.error("error: ", err));
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        userInfos,
        averageSession
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
