import React from "react";

import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import AppBar from "@material-ui/core/AppBar";
import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Container from "../../generic/containers/Container";
import HeaderBarContents from "../../custom/navigation/HeaderBarContents";

const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    textAlign: "left",
    backgroundColor: theme.palette.mono.main,
    position: "relative",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  menuButton: {
    alignSelf: "center",
    border: `solid 2px ${theme.palette.grey.light}`,
    borderRadius: "4px",
    padding: "4px 8px",
  },
  logoContainer: {
    maxHeight: "100px",
    maxWidth: "65%",
  },
  logoSettingsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  spacer: {
    flexGrow: 1,
  },
  switch: {
    alignSelf: "center",
    // margin: 0,
  },
  slider: {
    alignSelf: "center",
    maxWidth: "34px",
  },
}));

const HeaderBar = (props = {}) => {
  let toggleDrawer, setThemeState, themeState;
  ({ toggleDrawer, setThemeState, themeState, ...props } = props);

  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <MUIToolbar className={classes.toolbar} variant="dense">
        <Container className={classes.container}>
          <HeaderBarContents {...{ setThemeState, themeState }} />

          <IconButton
            onClick={toggleDrawer}
            className={classes.menuButton}
            aria-label="menu"
            color="primary"
            variant="outlined"
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </MUIToolbar>
    </AppBar>

    // </div>
  );
};

export default HeaderBar;
