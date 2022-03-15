import React from "react";
import { ContainerDisplay } from "./styles";

type DisplayProps = {
  operador: string;
  primeiroNumero: string;
  segundoNumero: string;
  resultado: string;
};

const Display: React.FC<DisplayProps> = ({
  operador,
  primeiroNumero,
  segundoNumero,
  resultado,
}) => {
  const formatOperador = (operador: string) => {
    let novoOperador = operador;
    if (operador === "/") {
      novoOperador = "÷";
    }
    return novoOperador;
  };

  return (
    <ContainerDisplay>
      <div>
        <span>{primeiroNumero}</span>
        <span>{formatOperador(operador)}</span>
        <span>{segundoNumero}</span>
        <span>{resultado}</span>
      </div>
    </ContainerDisplay>
  );
};

export default Display;
