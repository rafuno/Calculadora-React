import styled, { css } from "styled-components";

export const ContainerDisplay = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    input {
      background-color: ${theme.colors.white};
      margin: 10px;
      width: 329px;
      height: 50px;
      border-radius: 5px;
    }
  `}
`;
