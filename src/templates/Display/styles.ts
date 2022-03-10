import styled, { css } from "styled-components";

export const ContainerDisplay = styled.div`
  ${({ theme }) => css`
    div {
      background-color: ${theme.colors.white};
      margin: 15px auto;
      width: 320px;
      height: 50px;
      border-radius: 5px;
      color: ${theme.colors.black};
      text-align: end;
      padding: 20px;

      span {
        padding-right: 5px;
        font-size: 20px;
      }
    }
  `}
`;
