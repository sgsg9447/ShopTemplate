import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDataID } from "../../api/api";
import { CoffeeData } from "../../types";

export default function DetailPage() {
  let { id } = useParams();
  const [menus, setMenus] = useState<CoffeeData>();
  const fetchCoffeeData = async () => {
    // const response = await getCoffeeDataID(id);
    // setMenus(response);
  };

  useEffect(() => {
    fetchCoffeeData();
  }, []);

  return <>{menus?.menu}</>;
}
