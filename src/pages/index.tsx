import React from "react";
import Display from "../templates/Display";
import Header from "../templates/Header";
import { ContainerCalculadora } from "./styles";

const Calculadora: React.FC = () => {
  return (
    <ContainerCalculadora>
      <Header />
      <Display value={0} />
    </ContainerCalculadora>
  );
};

export default Calculadora;
