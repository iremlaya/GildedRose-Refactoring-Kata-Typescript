import { SpecialUpdateableItem } from "./SpecialUpdateableItem";

export class AgedBrie extends SpecialUpdateableItem {
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
    this.setChangeFactor();
    if (this.quality + this.changeFactor <= 50) {
      this.quality += this.changeFactor;
    }
  }
}
