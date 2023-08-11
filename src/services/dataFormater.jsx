import React, { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

const DataFormater = ({ title }) => {
  const { userInfos, user } = useData();
  const [data, setData] = useState();

  const PERF_FORMATER = () => {};
  const INFOCARD_FORMATER = () => {
    const infoCard = [
      {
        title: "Calories",
        bgc: "rgba(255, 1, 1, 0.1)",
        value: "kCal",
        icon: require("./../assets/images/icon_fire.png"),
        number: userInfos?.calorieCount,
      },
      {
        title: "Proteines",
        bgc: "rgba(74, 184, 255, 0.1)",
        value: "g",
        icon: require("./../assets/images/icon_chicken.png"),
        iconStyle: {
          width: 18.84,
          height: 18.74,
        },
        number: userInfos?.proteinCount,
      },
      {
        title: "Glucides",
        bgc: "rgba(253, 204, 12, 0.1)",
        value: "g",
        icon: require("./../assets/images/icon_apple.png"),
        iconStyle: {
          width: 16.81,
          height: 20,
        },
        number: userInfos?.carbohydrateCount,
      },
      {
        title: "Lipides",
        bgc: "rgba(253, 81, 129, 0.1)",
        value: "g",
        icon: require("./../assets/images/icon_burger.png"),
        iconStyle: {
          width: 20,
          height: 18.75,
        },
        number: userInfos?.lipidCount,
      },
    ];
    setData(infoCard);
  };

  useEffect(() => {
    switch (title) {
      case "INFOCARD_FORMATER":
        INFOCARD_FORMATER();
    }
  }, []);

  return data;
};

export default DataFormater;
