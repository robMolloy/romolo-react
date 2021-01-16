import React from "react";

import { makeStyles } from "@material-ui/styles";

import Switch from "@material-ui/core/Switch";
import Logo from "../../custom/media/Logo";
import Slider from "@material-ui/core/Slider";

// const headerHeight

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

const HeaderBarContents = (props = {}) => {
  let setThemeState, themeState;
  ({ setThemeState, themeState, ...props } = props);

  const classes = useStyles();

  const [squeeze, setSqueeze] = React.useState(32);
  return (
    <>
      <div className={classes.logoContainer}>
        <Logo squeeze={squeeze - 48} />
      </div>

      <div className={classes.spacer}></div>

      <span className={classes.logoSettingsContainer}>
        <Switch
          checked={themeState}
          onChange={() => setThemeState(!themeState)}
          className={classes.switch}
        />
        <Slider
          min={0}
          max={64}
          checked={themeState}
          onChange={(e, val) => setSqueeze(val)}
          className={classes.slider}
          value={squeeze}
        />
      </span>
    </>
  );
};

export default HeaderBarContents;
