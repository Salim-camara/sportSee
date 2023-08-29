class InfoCardData {
  constructor(data) {
    this.data = [
      {
        title: "Calories",
        bgc: "rgba(255, 1, 1, 0.1)",
        value: "kCal",
        icon: require("./../../assets/images/icon_fire.png"),
        number: data?.calorieCount,
      },
      {
        title: "Proteines",
        bgc: "rgba(74, 184, 255, 0.1)",
        value: "g",
        icon: require("./../../assets/images/icon_chicken.png"),
        iconStyle: {
          width: 18.84,
          height: 18.74,
        },
        number: data?.proteinCount,
      },
      {
        title: "Glucides",
        bgc: "rgba(253, 204, 12, 0.1)",
        value: "g",
        icon: require("./../../assets/images/icon_apple.png"),
        iconStyle: {
          width: 16.81,
          height: 20,
        },
        number: data?.carbohydrateCount,
      },
      {
        title: "Lipides",
        bgc: "rgba(253, 81, 129, 0.1)",
        value: "g",
        icon: require("./../../assets/images/icon_burger.png"),
        iconStyle: {
          width: 20,
          height: 18.75,
        },
        number: data?.lipidCount,
      },
    ];
  }
}

export default InfoCardData;
