import { GildedRose } from "@/gilded-rose";
import { Item } from "../../classes/Item";
import { AgedBrie } from "../../classes/AgedBrie";
import { Backstage } from "../../classes/Backstage";
import { items } from "../items";
import { Conjured } from "classes/Conjured";
import { Sulfuras } from "classes/Sulfuras";


describe('Gilded Rose', () => {
  let itemArr;

  beforeEach(() => {
    // Reset state
    itemArr = items;
  });

  it('Aged Brie should increase in quality', () => {
    const agedBrie: AgedBrie = itemArr[1];
    const prevQuality = agedBrie.quality;
    agedBrie.updateSpecialQuality();
    expect(agedBrie.quality).toBe(prevQuality + 1);
  });
  it('Sulfuras quality should not change', () => {
    const gildedRose = new GildedRose(itemArr);
    const sulfuras: Sulfuras = itemArr[3];
    const prevQuality = sulfuras.quality;
    gildedRose.updateQuality()
    expect(gildedRose.items[3].quality).toBe(prevQuality);
    expect(sulfuras.quality).toBe(prevQuality);
  });
  it('Backstage quality should increase by 2 when there are 10 days', () => {
    const backstage: Backstage = itemArr[8];
    const prevQuality = backstage.quality;
    backstage.updateSpecialQuality();
    expect(backstage.quality).toBe(prevQuality + 2);
  });
  it('Conjured quality should decrease by 2', () => {
    const conjured: Conjured = itemArr[11];
    const prevQuality = conjured.quality;
    conjured.updateSpecialQuality();
    expect(conjured.quality).toBe(prevQuality - 2);
  });
  it('Backstage quality should increase by 3 when there are 5 days', () => {
    const backstage: Backstage = itemArr[9];
    const prevQuality = backstage.quality;
    backstage.updateSpecialQuality();
    expect(backstage.quality).toBe(prevQuality + 3);
  });
  it('Backstage quality should be 0 when there are less than 0 days', () => {
    const backstage: Backstage = itemArr[10];
    backstage.updateSpecialQuality();
    expect(backstage.quality).toBe(0);
  });
  it('SellIn should decrease', () => {
    const gildedRose = new GildedRose(itemArr);
    const item: Item = itemArr[0];
    const prevSellIn = item.sellIn;
    gildedRose.updateQuality()
    expect(gildedRose.items[0].sellIn).toBe(prevSellIn - 1);
  });
});
