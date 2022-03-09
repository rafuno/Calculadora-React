import React from "react";
import { ContainerResult } from "./styles";

type ResultProps = {
  value: string;
  onClickResult?(data: any): void;
};

const Result: React.FC<ResultProps> = ({ children, value, onClickResult }) => {
  const handleClickResult = React.useCallback(
    (data: any) => {
      if (onClickResult) {
        onClickResult(data);
      }
    },
    [onClickResult]
  );

  return (
    <ContainerResult value={value} onClick={handleClickResult}>
      {children}
    </ContainerResult>
  );
};
export default Result;
