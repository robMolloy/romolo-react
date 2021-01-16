import React from "react";
import Logo from "../media/Logo";
import makeStyles from "@material-ui/styles/makeStyles";
import { Switch, Slider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},

  logoContainer: {
    maxHeight: "100px",
    maxWidth: "65%",
  },

  logo: { height: "100%" },

  spacer: { flexGrow: 1 },

  logoSettingsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
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
  let themeState, setThemeState;
  ({ themeState, setThemeState } = props);

  const [squeeze, setSqueeze] = React.useState(32);

  const classes = useStyles();

  return (
    <>
      <div>
        <Logo squeeze={squeeze - 48} />
      </div>

      <div className={classes.spacer}></div>

      <div className={classes.logoSettingsContainer}>
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
      </div>
    </>
  );
};

export default HeaderBarContents;
