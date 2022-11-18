import { AgedBrie } from '../classes/AgedBrie';
import { Backstage } from '../classes/Backstage';
import { Conjured } from '../classes/Conjured';
import { Item } from '../classes/Item';
import { Sulfuras } from '../classes/Sulfuras';


//todo:: Create an interface for items, and use a more generic structure
// {type: "vest", item: new Item...}
export const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new AgedBrie("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 10, 30),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 5, 30),
  new Backstage("Backstage passes to a TAFKAL80ETC concert", 0, 30),
  new Conjured("Conjured Mana Cake", 3, 6)];
