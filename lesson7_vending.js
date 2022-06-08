class Item {
  // 堅牢性を高める(動作確認済み)
  #productName
  #cash

  constructor(productName, cash) {
    this.#productName = productName;
    this.#cash = cash;
  }

  getProductName() {
    return this.#productName
  }

  getCash() {
    return this.#cash;
  }
}

class VendingMachine {
  constructor() {
    this.items = [];
  }

  addItem(item, num) {
    for(let i = 0; i < num; i++) {
      this.items.push(item);
    }
  }

  findItemList(productName) {
    const item = this.items.filter(function (value) {
      return value.getProductName() === productName
    })
    return item
  }

  buy(productName, cash) {
    const item = this.findItemList(productName);
    if (item.length === 0) { throw new Error('在庫がありません'); }
    if (item[0].getCash() > cash) { throw new Error('お金が足りません'); }
    this.items.splice(this.items.indexOf(item[0]), 1);
    return item;
  }

  canBuy(productName) {
    const item = this.findItemList(productName);
    return Boolean(item.includes(item[0]));
  }
}

const vending = new VendingMachine;

vending.addItem(new Item("コカコーラ", 120), 3);
vending.addItem(new Item("オレンジ", 200), 1);
vending.addItem(new Item("水", 80), 2);
console.log(vending)

const buyItem1 = vending.buy("コカコーラ", 120);
const buyItem2 = vending.buy("オレンジ", 200);
console.log(buyItem1);
console.log(buyItem2);

// お金が足りない(確認済)
// const buyItem3 = vending.buy("コカコーラ", 10);
// console.log(buyItem3);

// 在庫がない(確認済)
// const buyItem4 = vending.buy("オレンジ", 200);
// console.log(buyItem4);

console.log(vending)
console.log(vending.canBuy("コカコーラ"))
console.log(vending.canBuy("オレンジ"))