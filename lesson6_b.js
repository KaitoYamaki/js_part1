class PointCalculator {
  #results

  constructor(results) {
    this.#results = results;
  }

  sumPoint() {
    let sumPoint = 0;
    for (let i = 0; i < this.#results.length; i++) {
      sumPoint += this.#results[i].point;
    }
    return sumPoint;
  }

  avePoint() {
    let sumPoint = this.sumPoint();
    let avePoint = 0;
    for (let i = 0; i < this.#results.length; i++) {
      avePoint = sumPoint/this.#results.length;
    }
    return avePoint;
  }

  maxHuman() {
    let max = 0;
    let maxHuman = 0;
    for (let i = 0; i < this.#results.length; i++) {
      if (max < this.#results[i].point ) {
        max = this.#results[i].point;
        maxHuman = this.#results[i].name;
      }
    }
    return maxHuman;
  }

  addHuman(result) {
    this.#results.push(result);
    let sumPoint = this.sumPoint();
    let avePoint = this.avePoint();
    let maxHuman = this.maxHuman();
    return [sumPoint,avePoint,maxHuman];
  }
}

let results = [{ name: '鈴木', point: 80 }, { name: '田中', point: 92 }, { name: '佐藤', point: 75 }];
const point = new PointCalculator(results);

console.log(point.sumPoint());
console.log(point.avePoint());
console.log(point.maxHuman());
console.log(point.addHuman({ name: '阿部', point: 95 }));