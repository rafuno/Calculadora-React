import styled, { css } from "styled-components";

export const ContainerHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.grey};
    height: 80px;

    .output {
      margin: 0 auto;
      padding-top: 10px;
      background-color: ${theme.colors.lightGrey};
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 246px;
      height: 36px;
    }

    .nav-buttons {
      align-items: ;
      display: flex;
      align-items: center;
      img {
        margin: 10px;
      }
    }
  `}
`;
