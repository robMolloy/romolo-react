import React from "react";

import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import AppBar from "@material-ui/core/AppBar";
import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";

import Container from "../../generic/containers/Container";
import Logo from "../../custom/media/Logo";

// const headerHeight

const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    textAlign: "left",
    backgroundColor: theme.palette.mono.main,
    position: "relative",
  },
  container: {
    // position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    height: "100%",
  },
  menuButton: {
    alignSelf: "center",
    // color: theme.palette.grey.main,
    border: `solid 2px ${theme.palette.grey.light}`,
    borderRadius: "4px",
    padding: "4px 8px",
  },
  logoContainer: {
    maxHeight: "100px",
    maxWidth: "65%",
  },
  spacer: {
    flexGrow: 1,
  },
  switch: {
    alignSelf: "center",
  },
}));

const HeaderBar = (props = {}) => {
  let toggleDrawer, switchTheme, themeState;
  ({ toggleDrawer, switchTheme, themeState, ...props } = props);

  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <MUIToolbar className={classes.toolbar} variant="dense">
        <Container className={classes.container}>
          <div className={classes.logoContainer}>
            <Logo />
          </div>
          <div className={classes.spacer}></div>
          <Switch
            checked={themeState}
            onChange={switchTheme}
            className={classes.switch}
          />

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
