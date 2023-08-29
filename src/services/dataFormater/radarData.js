class RadarData {
  constructor(data) {
    const translater = (info) => {
      switch (info) {
        case "energy":
          return "Energie";
        case "intensity":
          return "Intensité";
        case "strength":
          return "Force";
        case "endurance":
          return "Endurance";
        case "speed":
          return "Vitesse";
        case "cardio":
          return "Cardio";
        default:
          return "";
      }
    };
    const tmp = data?.map((el) => {
      return {
        value: el.value,
        name: translater(el.name),
        A: 65,
        B: 85,
        fullMark: 150,
      };
    });
    this.data = tmp;
  }
}

export default RadarData;
