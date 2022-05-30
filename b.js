class Counter {
    constructor(){
        this.count = 0;
    }

    up() {
        this.count = this.count + 1;
    }

    getValue(){
        return this.count;
    }

    down() {
        this.count = this.count - 1;
    }

    resetValue() {
        this.count = 0;
    }

}
let counter = new Counter;
counter.up();
console.log(counter.getValue());
counter.up();
console.log(counter.getValue());
counter.down();
console.log(counter.getValue());
counter.resetValue();
console.log(counter.getValue());