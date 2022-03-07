import styled, { css } from "styled-components";

export const ContainerCalculadora = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.grey};
    width: 356px;
  `}
`;
