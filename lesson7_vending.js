class Item {
  #itemName
  #price

  constructor(itemName, price){
    this.#itemName = itemName;
    this.#price = price;
  }

  getItemName() {
    return this.#itemName
  }

  getPrice() {
    return this.#price
  }
}

class VendingMachine {
  constructor() {
    this.items = [];
  }
}