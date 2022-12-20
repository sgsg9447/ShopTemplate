import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useFetchItems } from "../../hooks";
import { itemsState } from "../../recoil/item";
import { pageRoutes } from "../../router";
import { Item } from "../../types";

export default function HomePage() {
  const { isLoading, items } = useFetchItems();
  const navigate = useNavigate();

  const handleClickDetail = (id: number) => {
    navigate(pageRoutes.DETAIL.replace(":id", String(id)));
  };

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        items.map((item: Item) => (
          <ul key={item.id}>
            <li onClick={() => handleClickDetail(item.id)}>{item.name}</li>
          </ul>
        ))
      )}
    </>
  );
}
