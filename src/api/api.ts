import axios from "axios";
import { Item, ItemData } from "../types";

const shopAxios = axios.create({
  baseURL: "http://localhost:8000",
});

// TODO: coffee -> item

//CREATE
export const createItemData = async (data: ItemData) => {
  const response = await shopAxios.post<Item[]>("/items", data);
  return response.data;
};

//READ
export const getItemData = async () => {
  const response = await shopAxios.get<Item[]>(`/items`);
  return response.data;
};

export const getItemDataID = async (id: any) => {
  const response = await shopAxios.get<Item>(`/items/${id}`);
  return response.data;
};

//UPDATE
export const editItemData = async (data: Item) => {
  const response = await shopAxios.patch<Item>(`/items/${data.id}`, data);
  return response.data;
};

//DELETE
export const deleteItemData = async (id: number) => {
  const response = await shopAxios.delete(`/items/${id}`);
  return response.data;
};
