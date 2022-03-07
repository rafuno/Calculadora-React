import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import Calculadora from "./pages";

import { Container } from "./styles/container";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <Calculadora></Calculadora>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
