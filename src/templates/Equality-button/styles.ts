import styled, { css } from "styled-components";

export const ContainerEquality = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    width: 100%;
    height: 64px;
    border-radius: 10px;
    font-size: 20px;

    &:hover {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
    :active {
      box-shadow: none;
    }
  `};
`;
