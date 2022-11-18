import { Item } from "./Item";

//todo :: Parent class may be "NonUpdateableItem".
export class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}
