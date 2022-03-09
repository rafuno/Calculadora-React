import React from "react";
import { ContainerDisplay } from "./styles";

type DisplayProps = {
  acumulator: string;
  primeiroNumero: string;
  segundoNumero: string;
  resultado: string;
};

const Display: React.FC<DisplayProps> = ({
  acumulator,
  primeiroNumero,
  segundoNumero,
  resultado,
}) => {
  return (
    <ContainerDisplay>
      <input
        type="text"
        defaultValue={0}
        value={primeiroNumero + acumulator + segundoNumero + resultado}
      />
    </ContainerDisplay>
  );
};

export default Display;
