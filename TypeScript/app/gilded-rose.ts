import { Item } from "../classes/Item";
import { SpecialUpdateableItem } from "../classes/SpecialUpdateableItem";
import { Sulfuras } from "../classes/Sulfuras";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item instanceof SpecialUpdateableItem) {
        item.updateSpecialQuality();
      } else if (!(item instanceof Sulfuras)) {
        /**
         * todo:: Can check for the case where special item is not initialized as its proper class
         * to ensure it's not lost.
         *
         * else if (SPECIAL_ITEM_NAMES.includes(item.name)) {
         * // Determine the correct class with switch-case, and initialize the object
         * const specialItem = new SpecialUpdateableItem(item.name, ...)
         * specialItem.updateSpecialQuality()
         *
         * //copy the quality
         * item.quality = specialItem.quality
         */
        if (item.quality > 0) {
          item.quality -= 1;
        }
        item.sellIn -= 1;
      }
    }

    return this.items;
  }
}
