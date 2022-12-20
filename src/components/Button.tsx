import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return <button onClick={onClick}>{children}</button>;
};
export default Button;
