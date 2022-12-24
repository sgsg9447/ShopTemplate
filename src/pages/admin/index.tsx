import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteItemData } from "../../api/api";
import { useFetchItems } from "../../hooks";
import { pageRoutes } from "../../router";
import { Item } from "../../types";

export default function AdminPage() {
  const {  items, refetch } = useFetchItems();
  const navigate = useNavigate();

  const handleDeleteClick = async (id: number) => {
    await deleteItemData(id);
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
            }}
          >
            수정하기
          </button>
          <button onClick={() => handleDeleteClick(item.id)}>삭제하기</button>
        </div>
      ))}
    </>
  );
}
