import { Item } from "./Item";

// todo:: May add access modifiers for more encapsulation.
// todo:: Ideally, Item class should be abstract.
export abstract class SpecialUpdateableItem extends Item {
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
