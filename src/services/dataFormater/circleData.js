class CircleData {
  constructor(data) {
    this.data = [
      {
        fill: "transparent",
        value: 100,
      },
      {
        ...data,
        value: data?.todayScore ? data?.todayScore * 100 : data?.score * 100,
        fill: "#FF0101",
      },
    ];
  }
}

export default CircleData;
