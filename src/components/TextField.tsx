import React from "react";

const TextField = ({
  type,
  placeholder = "",
  onChange,
  value,
}: {
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: any;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default TextField;
