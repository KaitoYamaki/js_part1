class Item {
  #prodactName
  #cash

  constructor(prodactName, cash){
    this.#prodactName = prodactName;
    this.#cash = cash;
  }

  getItemName() {
    return this.#prodactName
  }

  getPrice() {
    return this.#cash
  }
}

class VendingMachine {
  constructor() {
    this.items = [];
  }

  // 商品の追加
  addItem(item) {
    this.items.push(item);
  }
  // 在庫確認
}