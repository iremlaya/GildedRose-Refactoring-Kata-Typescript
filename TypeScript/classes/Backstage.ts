import { SpecialUpdateableItem } from "./SpecialUpdateableItem";

export class Backstage extends SpecialUpdateableItem {
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
