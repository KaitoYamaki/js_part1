class EventCounter {
  constructor(){
    this.count = 0;
    this.time = 0;
  }
  up() {
    this.time += 1;
    if (this.time % 2 === 0) {
      this.count += 1;
    };
    }
  getValue(){
    return this.count;
  }
}

let counter = new EventCounter;

counter.up(); // => ここではアップしない
counter.up(); // => ここでアップ
console.log(counter.getValue()); // => 1と表示される
counter.up(); // => ここではアップしない
counter.up(); // => ここでアップ
counter.up(); // => ここではアップしない
console.log(counter.getValue()); // => 2と表示される
