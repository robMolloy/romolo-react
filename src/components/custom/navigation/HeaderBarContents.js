import React from "react";

import { makeStyles } from "@material-ui/styles";

import Switch from "@material-ui/core/Switch";
import Logo from "../../custom/media/Logo";
import Slider from "@material-ui/core/Slider";

// const headerHeight

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    maxHeight: "100px",
    maxWidth: "65%",
  },
  logoSettingsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  slider: {
    alignSelf: "center",
    maxWidth: "34px",
  },
  spacer: { flexGrow: 1 },
  switch: { alignSelf: "center" },
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
