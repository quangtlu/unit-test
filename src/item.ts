import { A } from "./A";
import { B } from "./B";
import { C } from "./C";
import { D } from "./D";

export interface Item {
  getPrice(): number;
}

export enum ItemType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

export function itemFactory(itemChar: string): Item {
  switch (itemChar) {
    case ItemType.A:
      return new A();
    case ItemType.B:
      return new B();
    case ItemType.C:
      return new C();
    case ItemType.D:
      return new D();
    default:
      throw new Error("Unknown item");
  }
}
