import React from "react";
import { ContainerDisplay } from "./styles";

type DisplayProps = {
  value: number;
};

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <ContainerDisplay>
      <input type="text" value={value} />
    </ContainerDisplay>
  );
};

export default Display;
