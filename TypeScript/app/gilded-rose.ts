export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// todo:: May add access modifiers for more encapsulation.
// todo:: Ideally, Item class should be abstract.
abstract class SpecialItem extends Item {
  protected changeFactor;
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  abstract getChangeFactorTypes(): void;
  abstract setChangeFactor(): void;

  // todo :: ideally, these methods, with slight changes, should be in Item class.
  abstract updateSpecialQuality(): void;
  decreaseSellInByOne() {
    this.sellIn -= 1;
  }
}

class AgedBrie extends SpecialItem {
  changeFactor;
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  getChangeFactorTypes() {
    return {
      default: 1,
    };
  }

  setChangeFactor() {
    this.changeFactor = this.getChangeFactorTypes().default;
  }

  updateSpecialQuality() {
    // Update date passed
    this.decreaseSellInByOne();

    // Update quality if it is, and going to be less than 50.
    // Assuming quality increase rate doesnt change
    if (this.quality + this.changeFactor <= 50) {
      this.quality += this.changeFactor;
    }
  }
}

class BackStage extends SpecialItem {
  changeFactor;
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  getChangeFactorTypes() {
    return {
      datePassed: -1 * this.quality,
      default: 1,
      tenDaysOrLessToDate: 2,
      fiveDaysOrLessToDate: 3,
    };
  }

  setChangeFactor() {
    const changeFactorTypes = this.getChangeFactorTypes();
    if (this.sellIn < 0) {
      this.changeFactor = changeFactorTypes.datePassed;
    } else if (this.sellIn <= 5) {
      this.changeFactor = changeFactorTypes.fiveDaysOrLessToDate;
    } else if (this.sellIn <= 10) {
      this.changeFactor = changeFactorTypes.tenDaysOrLessToDate;
    } else {
      this.changeFactor = changeFactorTypes.default;
    }
  }

  updateSpecialQuality() {
    // Update date passed
    this.decreaseSellInByOne();

    // Update quality if it is, and going to be less than 50.
    // Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
    // Quality drops to 0 after the concert
    this.setChangeFactor();
    if (this.quality + this.changeFactor <= 50) {
      this.quality += this.changeFactor;
    }
  }
}

class Conjured extends SpecialItem {
  changeFactor;
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  getChangeFactorTypes() {
    return {
      default: 2,
    };
  }

  setChangeFactor() {
    this.changeFactor = this.getChangeFactorTypes().default;
  }

  updateSpecialQuality() {
    // Update date passed
    this.decreaseSellInByOne();

    this.setChangeFactor();
    if (this.quality - this.changeFactor >= 0) {
      this.quality -= this.changeFactor;
    }
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const name = item.name;

      // Assuming names can be user input,
      // Use lower case to ensure accuracy
      const nameLowerCase = name.toLowerCase();

      if (item instanceof SpecialItem) {
        item.updateSpecialQuality();
      } else {
        /**
         * todo:: Can check for the case where special item is not initialized as its proper class
         * to ensure it's not lost.
         *
         * else if (SPECIAL_ITEM_NAMES.includes(item.name)) {
         * // Determine the correct class with switch-case, and initialize the object
         * const specialItem = new SpecialItem(item.name, ...)
         * specialItem.updateSpecialQuality()
         *
         * //copy the quality
         * item.quality = specialItem.quality
         */
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1;
        }
      }
    }

    return this.items;
  }
}
