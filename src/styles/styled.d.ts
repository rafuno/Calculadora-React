import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      grey: string;
      lightGrey: string;
      green: string;
      white: string;
      black: string;
      middleGrey: string;
    };
    screen: {
      sl: number;
      xl: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
    };

    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        sl: string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
      };
    };
  }
}
