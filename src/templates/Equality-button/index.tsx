import React from "react";
import { ContainerEquality } from "./styles";

type EqualityProps = {
  onClickResult: () => void;
};

const Equality: React.FC<EqualityProps> = ({ children, onClickResult }) => {
  return (
    <ContainerEquality onClick={onClickResult}>{children}</ContainerEquality>
  );
};
export default Equality;
