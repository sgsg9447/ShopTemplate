import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createItemData, getItemDataID } from "../../api/api";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNumberInput, useTextInput } from "../../hooks";
import { pageRoutes } from "../../router";
import { ItemData } from "../../types";

export default function AdminItemPage() {
  const { id } = useParams();
  const isEdit = id ? true : false;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    value: nameValue,
    onChangeInput: onChangeName,
    isValid: isValidName,
    errorText: errorTextForName,
  } = useTextInput({
    maxLength: 10,
    minLength: 3,
  });
  const {
    value: descValue,
    onChangeInput: onChangeDesc,
    isValid: isValidDesc,
    errorText: errorTextForDesc,
  } = useTextInput({
    maxLength: 30,
    minLength: 5,
  });

  const {
    value: quantValue,
    onChangeInput: onChangeQuant,
    isValid: isValidQuant,
    errorText: errorTextForQuant,
  } = useNumberInput({
    maxLength: 100,
    minLength: 1,
  });

  const {
    value: priceValue,
    onChangeInput: onChangePrice,
    isValid: isValidPrice,
    errorText: errorTextForPrice,
  } = useNumberInput({
    maxLength: 100,
    minLength: 1,
  });

  const handleSubmit = async (e: any) => {
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

  // console.log("id", getItemDataID(id));

  return (
    <div>
      <div>{isEdit ? "수정하기" : "새로 만들기"}</div>
      {isEdit ? (
        <>
          <div>
            <input
              type="radio"
              id="contactChoice1"
              name="type"
              value="coffee"
            />
            <label htmlFor="contactChoice1">Coffee</label>
            <input
              type="radio"
              id="contactChoice2"
              name="type"
              value="desert"
            />
            <label htmlFor="contactChoice2">Desert</label>
          </div>
          <div>
            <TextField type="text" placeholder="name" onChange={onChangeName} />
            <br />
            {isValidName === false && <div>{errorTextForName}</div>}
            <TextField
              type="text"
              placeholder="description"
              onChange={onChangeDesc}
            />
            <br />
            {isValidDesc === false && <div>{errorTextForDesc}</div>}
            <TextField
              type="number"
              placeholder="price"
              onChange={onChangePrice}
            />
            <br />
            {isValidPrice === false && <div>{errorTextForPrice}</div>}
            <TextField
              type="number"
              placeholder="quantity"
              onChange={onChangeQuant}
            />
            {isValidQuant === false && <div>{errorTextForQuant}</div>}
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <input
              type="radio"
              id="contactChoice1"
              name="type"
              value="coffee"
            />
            <label htmlFor="contactChoice1">Coffee</label>
            <input
              type="radio"
              id="contactChoice2"
              name="type"
              value="desert"
            />
            <label htmlFor="contactChoice2">Desert</label>
          </div>
          <div>
            <TextField type="text" placeholder="name" onChange={onChangeName} />
            <br />
            {isValidName === false && <div>{errorTextForName}</div>}
            <TextField
              type="text"
              placeholder="description"
              onChange={onChangeDesc}
            />
            <br />
            {isValidDesc === false && <div>{errorTextForDesc}</div>}
            <TextField
              type="number"
              placeholder="price"
              onChange={onChangePrice}
            />
            <br />
            {isValidPrice === false && <div>{errorTextForPrice}</div>}
            <TextField
              type="number"
              placeholder="quantity"
              onChange={onChangeQuant}
            />
            {isValidQuant === false && <div>{errorTextForQuant}</div>}
          </div>
        </>
      )}

      <Button onClick={handleSubmit}>제출하기</Button>
    </div>
  );
}
