import { ItemType } from "./item";

export class Discount {
  constructor(
    private itemType: ItemType,
    private quantity: number,
    private discount: number
  ) {}

  calculateDiscount(itemList: string): number {
    const counter = itemList
      .split("")
      .filter((item) => item === this.itemType).length;
    return Math.trunc(counter / this.quantity) * this.discount;
  }
}
