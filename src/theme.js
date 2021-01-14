import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import danger from "@material-ui/core/colors/red";

const themeCreator = createMuiTheme({
  palette: {
    primary: { main: "#34719a" },
    secondary: { main: "#f6f6f6" },
  },
});

const { primary: tertiary, secondary: mono } = themeCreator.palette;

const theme = createMuiTheme({
  palette: {
    primary: { main: "#004267" },
    secondary: { main: "#ceebfa" },
    tertiary,
    mono,
  },
  status: { danger },
});

const grey = theme.palette.grey;
Object.assign(grey, { light: grey[200], main: grey[400], dark: grey[500] });

export default theme;
