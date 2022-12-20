import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  createItemData,
  deleteItemData,
  editItemData,
  getItemData,
} from "../../api/api";
import { useFetchItems } from "../../hooks";
import { itemsState } from "../../recoil/item";
import { pageRoutes } from "../../router";
import { Coffee, CoffeeData, Item, ItemData } from "../../types";

export default function AdminPage() {
  const { isLoading, items, refetch } = useFetchItems();
  const navigate = useNavigate();

  const [newMenu, setNewMenu] = useState<ItemData | null>(null);
  const [editMenu, setEditMenu] = useState<Item | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
  };
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setEditMenu({ ...editMenu, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      // await createCoffeeData(newMenu);
      // setNewMenu({ menu: "" });ㄴㄴ
    } catch (err) {
      alert("err new");
    }
  };

  const handleDeleteClick = async (id: number) => {
    await deleteItemData(id);
    refetch();
  };

  const handleEditSubmit = async () => {
    setIsEditing(true);
    // await editCoffeeData(editMenu);
    setIsEditing(false);
    refetch();
  };

  return (
    <>
      <p>
        <button
          onClick={() => {
            navigate(pageRoutes.ADMIN_ITEMS_CREATE);
          }}
        >
          새 Item 추가하기
        </button>
      </p>

      <p>
        <b>Items</b>
      </p>
      {items.map((item: Item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <button
            onClick={(id: any) => {
              navigate(
                pageRoutes.ADMIN_ITEMS_EDIT.replace(":id", String(item.id))
              );

              // const handleClickDetail = (id: number) => {
              //   navigate(pageRoutes.DETAIL.replace(":/detail", String(id)));
              // };
            }}
          >
            수정하기
          </button>
        </div>
      ))}
      {/* <p>
        <b>UPADATE</b>
      </p>
      {items.map((item: CoffeeData) => (
        <div key={item.id}>
          {item.id === editMenu.id ? (
            <>
              <input
                defaultValue={item.menu}
                name="menu"
                onChange={handleEditChange}
              />

              <button type="submit" onClick={handleEditSubmit}>
                저장하기
              </button>
            </>
          ) : (
            <>
              <div>{item.menu}</div>
              <button
                onClick={() => {
                  setEditMenu({ id: item.id, menu: item.menu });
                }}
              >
                수정하기
              </button>
            </>
          )}
        </div>
      ))}
      <p>
        <b>DELETE</b>
      </p>
      {items.map((item: CoffeeData) => (
        <div key={item.id}>
          <div>{item.menu}</div>
          <button
            onClick={() => {
              handleDeleteClick(item.id);
            }}
          >
            삭제하기
          </button>
        </div>
      ))} */}
    </>
  );
}
