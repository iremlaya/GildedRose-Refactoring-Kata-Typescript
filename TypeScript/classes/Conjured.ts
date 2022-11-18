import { SpecialUpdateableItem } from "./SpecialUpdateableItem";

export class Conjured extends SpecialUpdateableItem {
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
