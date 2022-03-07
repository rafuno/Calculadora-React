import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
