export interface Coffee {
  menu: string;
}

export interface CoffeeData extends Coffee {
  id: number;
}

type ItemDataType = "coffee" | "desert";

export interface ItemData {
  type: ItemDataType;
  name: string;
  description: string;
  price: number;
  quantity: number; //| "ondemand";
  thumbnail?: string;
  id?: number | string;
}

export interface Item extends ItemData {
  id: number;
}
