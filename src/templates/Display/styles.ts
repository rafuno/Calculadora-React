import styled, { css } from "styled-components";

export const ContainerDisplay = styled.div`
  ${({ theme }) => css`
    input {
      background-color: ${theme.colors.white};
      margin: 10px;
      width: 300px;
      height: 50px;
      border-radius: 5px;
    }
  `}
`;
