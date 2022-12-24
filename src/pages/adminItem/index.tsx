import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createItemData, editItemData, getItemDataID } from "../../api/api";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNumberInput, useTextInput } from "../../hooks";
import { pageRoutes } from "../../router";
import { Item, ItemData } from "../../types";

export default function AdminItemPage() {
  const { id } = useParams();
  const isEdit = id ? true : false;
  const [editMenu, setEditMenu] = useState<Item | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const fetchItemData = async () => {
    const response = await getItemDataID(id);
    setEditMenu(response);
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  const {
    value: nameValue,
    onChangeInput: onChangeName,
    isValid: isValidName,
    errorText: errorTextForName,
  } = useTextInput({
    maxLength: 10,
    minLength: 3,
    defaultValue: isEdit ? editMenu?.name : "",
  });

  const {
    value: descValue,
    onChangeInput: onChangeDesc,
    isValid: isValidDesc,
    errorText: errorTextForDesc,
  } = useTextInput({
    maxLength: 30,
    minLength: 5,
    defaultValue: isEdit ? editMenu?.description : "",
  });

  const {
    value: quantValue,
    onChangeInput: onChangeQuant,
    isValid: isValidQuant,
    errorText: errorTextForQuant,
  } = useNumberInput({
    maxLength: 100,
    minLength: 1,
    defaultValue: isEdit ? editMenu?.quantity : 0,
  });

  console.log("editMenu", isEdit, editMenu?.quantity, quantValue);

  const {
    value: priceValue,
    onChangeInput: onChangePrice,
    isValid: isValidPrice,
    errorText: errorTextForPrice,
  } = useNumberInput({
    maxLength: 100,
    minLength: 1,
    defaultValue: isEdit ? editMenu?.price : 0,
  });

  //TODO 왜 안되지 ?? 생각대로라면, editMenu 의 값을 가져오고 변경된것만 변경 되게 하는건데 ..... ?
  const handleEditSubmit = async (e: any) => {
    const editItem: ItemData = {
      name: nameValue,
      description: descValue,
      price: priceValue,
      quantity: quantValue,
      type: "coffee",
      id: id,
    };

    console.log("editItem", editItem);
    console.log(
      "editMenu",
      editMenu,
      nameValue,
      descValue,
      priceValue,
      quantValue
    );

    try {
      setIsSubmitting(true);
      await editItemData(editItem);
      setIsSubmitting(false);
      navigate(pageRoutes.ADMIN);
    } catch (error) {
      alert("submit new item error");
      setIsSubmitting(false);
    }
  };

  const handleCreateSubmit = async (e: any) => {
    const newItem: ItemData = {
      name: nameValue,
      description: descValue,
      price: priceValue,
      quantity: quantValue,
      type: "coffee",
    };
    //valid 통과 했을 때에만 submit 할 수 있게 ?
    try {
      setIsSubmitting(true);
      await createItemData(newItem);
      setIsSubmitting(false);
      navigate(pageRoutes.ADMIN);
    } catch (error) {
      alert("submit new item error");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div>{isEdit ? "수정하기" : "새로 만들기"}</div>
      <>
        <div>
          <input type="radio" id="contactChoice1" name="type" value="coffee" />
          <label htmlFor="contactChoice1">Coffee</label>
          <input type="radio" id="contactChoice2" name="type" value="desert" />
          <label htmlFor="contactChoice2">Desert</label>
        </div>
        <div>
          <TextField
            value={nameValue}
            type="text"
            placeholder="name"
            onChange={onChangeName}
          />
          <br />
          {isValidName === false && <div>{errorTextForName}</div>}
          <TextField
            value={descValue}
            type="text"
            placeholder="description"
            onChange={onChangeDesc}
          />
          <br />
          {isValidDesc === false && <div>{errorTextForDesc}</div>}
          <TextField
            value={priceValue + ""}
            type="number"
            placeholder="price"
            onChange={onChangePrice}
          />
          <br />
          {isValidPrice === false && <div>{errorTextForPrice}</div>}
          <TextField
            value={quantValue}
            type="number"
            placeholder="quantity"
            onChange={onChangeQuant}
          />
          {isValidQuant === false && <div>{errorTextForQuant}</div>}
        </div>
        <Button onClick={isEdit ? handleEditSubmit : handleCreateSubmit}>
          제출하기
        </Button>
      </>
    </div>
  );
}
