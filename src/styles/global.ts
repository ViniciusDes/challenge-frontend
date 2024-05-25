import { createTheme, responsiveFontSizes } from "@mui/material";

export const colors = {
  primary: "#f0815a",
  gray: "#f5f5f5",
  gray_700: "#757575",
  blue: "#457ab7",
};

export let defaultTheme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
    fontSize: 14,
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },

  palette: {
    primary: {
      main: colors.primary,
      light: colors.primary,
    },
    background: {
      default: colors.gray,
    },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);
