import React from "react";
import { ContainerButton } from "./styles";

type ButtonProps = {
  value: string;
};

const Button: React.FC<ButtonProps> = ({ children, value }) => {
  return <ContainerButton value={value}>{children}</ContainerButton>;
};
export default Button;
