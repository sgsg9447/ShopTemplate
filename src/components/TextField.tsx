import React, { InputHTMLAttributes } from "react";
import { InputType } from "zlib";

const TextField = ({
  type,
  placeholder = "",
  onChange,
}: {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return <input type={type} placeholder={placeholder} onChange={onChange} />;
};
export default TextField;
