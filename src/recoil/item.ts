import { atom } from "recoil";
import { Item } from "../types";

export const itemsState = atom<Item[]>({
  key: "itemsState",
  default: [],
});
