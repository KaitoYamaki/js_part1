class PointCalculator {
  #results

  constructor(results) {
    this.#results = results;
  }

  sumPoint() {
    let sumPoint = this.#results.reduce(function (sum, value) {
      return sum + value.point
    }, 0)
    return sumPoint;
  }

  avePoint() {
    const sumPoint = this.sumPoint();
    let avePoint = 0;
    avePoint = sumPoint/this.#results.length;
    return avePoint;
  }

  maxHuman() {
    let max = this.#results.reduce(function (max, value) {
      return max.point > value.point ? max : value;
    }, 0)
    return max.name;
  }

  addHuman(result) {
    this.#results.push(result);
    const sumPoint = this.sumPoint();
    const avePoint = this.avePoint();
    const maxHuman = this.maxHuman();
    return [sumPoint, avePoint, maxHuman];
  }
}

const results = [{ name: '鈴木', point: 80 }, { name: '田中', point: 92 }, { name: '佐藤', point: 75 }];
const pointCalculator = new PointCalculator(results);

console.log(pointCalculator.sumPoint());
console.log(pointCalculator.avePoint());
console.log(pointCalculator.maxHuman());
console.log(pointCalculator.addHuman({ name: '阿部', point: 95 }));