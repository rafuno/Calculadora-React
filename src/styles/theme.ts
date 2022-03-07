function pxToRem(rem: any): string {
  return (parseInt(rem) / 16).toString() + "rem";
}

export default {
  screen: {
    sl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 350,
  },

  colors: {
    grey: "#595656",
    lightGrey: "#C4C4C4",
    white: "#FFF6F6",
    black: "#000000",
    green: "#97D4A8",
  },
  font: {
    family: "Roboto, sansserif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xs: pxToRem(12),
      sm: pxToRem(14),
      md: pxToRem(16),
      lg: pxToRem(18),
      xl: pxToRem(22),
      sl: pxToRem(24),
    },
  },
} as const;
