class PerformanceData {
  constructor(value, name) {
    this.name = name;
    this.value = value;
  }
}

class Vehicule {
  constructor(typeMouvement) {
    console.log("Vehicule");
    this.typeMouvement = typeMouvement;
  }

  Mouvement() {
    console.log(this.typeMouvement);
  }
}

class Voiture extends Vehicule {
  constructor() {
    console.log("Voiture");
    super("ça roule");
  }
}

class Avion extends Vehicule {
  constructor() {
    console.log("Voiture");
    super("ça vole");
  }
}

new Voiture().Mouvement();
new Avion().Mouvement();

class GetData {
  constructor(data) {
    this.score = data.score ?? data.todayScore;
    console.log("l39 ", this.score);
  }
}

console.log(new GetData({ score: 30 }));
console.log(new GetData({ todayScore: 30 }));

export default PerformanceData;
