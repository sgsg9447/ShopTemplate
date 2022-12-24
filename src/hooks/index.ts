import React, { useCallback, useEffect, useRef, useState } from "react";
import { DefaultValue, useRecoilState } from "recoil";
import { getItemData } from "../api/api";
import { itemsState } from "../recoil/item";
import { Item } from "../types";

export const useFetchItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useRecoilState<Item[]>(itemsState);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await getItemData();
      setIsLoading(false);

      setItems(response);
    } catch (err) {
      setIsLoading(false);
      alert("getItems error");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return {
    isLoading,
    items,
    refetch: fetchItems,
  };
};

export const useTextInput = ({
  defaultValue = "",
  maxLength,
  minLength,
}: {
  defaultValue?: string;
  maxLength?: number;
  minLength?: number;
}) => {
  const [value, setValue] = useState("");
  const isValid = useRef<boolean>(true);
  const errorText = useRef<string>("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.value;

      setValue(targetValue);

      if (minLength !== undefined && targetValue.length < minLength) {
        isValid.current = false;
        errorText.current = "under min";
        return;
      }

      if (maxLength !== undefined && targetValue.length > maxLength) {
        isValid.current = false;
        errorText.current = "over max";
        return;
      }

      isValid.current = true;
      errorText.current = "";
    },
    []
  );

  return {
    value,
    onChangeInput,
    isValid: isValid.current,
    errorText: errorText.current,
  };
};

export const useNumberInput = ({
  maxLength,
  minLength,
  defaultValue = 0,
}: {
  maxLength?: number;
  minLength?: number;
  defaultValue?: number;
}) => {
  const [value, setValue] = useState(0);
  const isValid = useRef<boolean>(true);
  const errorText = useRef<string>("");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = Number(e.target.value);

      console.log(
        "targetValue",
        targetValue,
        typeof targetValue,
        Number(targetValue)
      );

      setValue(targetValue);

      if (minLength !== undefined && Number(targetValue) < minLength) {
        isValid.current = false;
        errorText.current = "under min";
        return;
      }

      if (maxLength !== undefined && Number(targetValue) > maxLength) {
        isValid.current = false;
        errorText.current = "over max";
        return;
      }

      isValid.current = true;
      errorText.current = "";
    },
    []
  );

  return {
    value,
    onChangeInput,
    isValid: isValid.current,
    errorText: errorText.current,
  };
};
