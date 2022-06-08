class Counter {
  #value
  
  constructor(value) {
    this.#value = 0;
  }

  addCounter() {
    this.#value += 1;
  }

  getCounter() {
    return this.#value;
  }
}

const counter = new Counter; 
counter.addCounter();
console.log(counter.getCounter());
counter.addCounter();
console.log(counter.getCounter());