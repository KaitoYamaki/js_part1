class Item {
  // 堅牢性を高める(動作確認済み)
  productName
  cash

  constructor(productName, cash) {
    this.productName = productName;
    this.cash = cash;
  }

  getProductName() {
    return this.productName
  }

  getCash() {
    return this.cash;
  }
}

class VendingMachine {
  constructor() {
    this.items = [];
  }

  addItem(item, num) {
    const items = this.items.filter(function(item) { return item.name === item.name });
    const cashes = items.map(function(item) { return item.cash  });  // [120, 120]
    if(cashes[0] !== item.cash) // or cashes[0]  !== item.cash
      for(let i = 0; i < num; i++) {
        this.items.push(item);
    }
  }



  findItemList(productName) {
    const items = this.items.filter(function (value) {
      return value.getProductName() === productName
    })
    return items
  }

  buy(productName, cash) {
    let items = this.findItemList(productName);
    if (items.length === 0) { throw new Error('在庫がありません'); }
    if (items[0].getCash() > cash) { throw new Error('お金が足りません'); }
    const item =this.items.splice(this.items.indexOf(items[0]), 1);
    return item;
  }

  canBuy(productName) {
    const items = this.findItemList(productName);
    return Boolean(items.length > 0);
  }
}

const vending = new VendingMachine;
console.log(new Item("コカコーラ", 120))
vending.addItem(new Item("コカコーラ", 120), 3);
vending.addItem(new Item("オレンジ", 200), 1);
vending.addItem(new Item("水", 80), 2);
vending.addItem(new Item("水", 40), 2);
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