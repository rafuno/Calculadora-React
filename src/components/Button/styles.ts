import styled, { css } from "styled-components";
export const ContainerButton = styled.button`
  ${({ theme }) => css`
    width: 70px;
    height: 70px;
    background-color: ${theme.colors.lightGrey};
    border-radius: 10px;
    margin: 7px;
    font-size: 20px;
    color: ${theme.colors.black};

    &:hover {
      box-shadow: 2px 2px 2px 1px #4EDC4A;
    }
    :active {
      box-shadow: none;
    }
  `}
`;
