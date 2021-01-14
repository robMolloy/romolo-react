import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import danger from "@material-ui/core/colors/red";

const themeCreator = createMuiTheme({
  palette: {
    primary: { main: "#FBAA60" },
    secondary: { main: "#535b5f" },
  },
});

const { primary: tertiary, secondary: mono } = themeCreator.palette;

const theme = createMuiTheme({
  palette: {
    primary: { main: "#F67B50" },
    secondary: { main: "#FBC490" },
    tertiary,
    mono,
  },
  status: { danger },
});

const grey = theme.palette.grey;
Object.assign(grey, { light: grey[200], main: grey[400], dark: grey[500] });

export default theme;
