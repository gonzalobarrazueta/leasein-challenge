class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {

    for (var i = 0; i < this.items.length; i++) {

      let qualityIncrement = -1;
      let sellInIncrement = -1;

      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      if (this.items[i].sellIn <= 0) qualityIncrement = -2;

      if (this.items[i].name == 'Aged Brie') {
        qualityIncrement = 1;

        if (this.items[i].sellIn <= 0) qualityIncrement = 2;
      }

      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {

        if (this.items[i].sellIn <= 0) {
          qualityIncrement = -this.items[i].quality;
        } else if (this.items[i].sellIn <= 5) {
          qualityIncrement = 3;
        } else if (this.items[i].sellIn <= 10) {
          qualityIncrement = 2;
        } else {
          qualityIncrement = 1;
        }
      }

      if (this.items[i].name == 'Conjured Mana Cake') {
        qualityIncrement = -2;
      }

      this.items[i].quality += qualityIncrement;
      this.items[i].sellIn += sellInIncrement;

      if (this.items[i].quality < 0) this.items[i].quality = 0;
      if (this.items[i].quality > 50) this.items[i].quality = 50;
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
