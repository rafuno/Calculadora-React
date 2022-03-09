import styled, { css } from "styled-components";

export const ContainerCalculadora = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.middleGrey};
    width: 356px;
    margin: 0 auto;

    .result-screen {
      background-color: ${theme.colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }

    .result {
      width: 155px;
      margin: 8px;
      display: inline-block;
    }
  `}
`;
