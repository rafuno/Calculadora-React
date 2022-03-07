import styled, { css } from "styled-components";
export const ContainerButton = styled.button`
  ${({ theme }) => css`
    width: 70px;
    height: 70px;
    background-color: ${theme.colors.lightGrey};
    border-radius: 10px;
    margin: 7px;
  `}
`;
