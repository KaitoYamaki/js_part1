class EventCounter {
    constructor(){
      this.count = 0;
    }

    up() {
      this.count = this.count + 1;
    }

    getValue(){
      return Math.trunc(this.count/2);
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
