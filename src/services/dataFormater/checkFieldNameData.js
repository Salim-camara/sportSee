class CheckFieldNameData {
  constructor(data) {
    this.score = data.score ?? data.todayScore;
  }
}

export default CheckFieldNameData;
