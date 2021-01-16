import React from "react";
import SideBar from "../../generic/navigation/SideBar";
import HeaderBar from "../../generic/navigation/HeaderBar";

const NavBars = (props = {}) => {
  let drawerOpen, imgSrc, themeState, setThemeState;
  ({ drawerOpen = false, imgSrc, themeState, setThemeState, ...props } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <HeaderBar {...{ imgSrc, toggleDrawer, themeState, setThemeState }} />

      <SideBar {...{ state: drawerState, toggleDrawer }} />
    </>
  );
};

export default NavBars;
