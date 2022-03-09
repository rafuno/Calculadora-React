import React from "react";
import { ContainerButton } from "./styles";

type ButtonProps = {
  value: string | number;
  onClickValue?(data: any): void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  value = "",
  onClickValue,
}) => {
  const handleClickButton = React.useCallback(
    (data: any) => {
      if (onClickValue) {
        onClickValue(data);
      }
    },
    [onClickValue]
  );
  return (
    <ContainerButton value={value} onClick={handleClickButton}>
      {children}
    </ContainerButton>
  );
};
export default Button;
