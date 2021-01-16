import React from "react";
import SideBar from "../../generic/navigation/SideBar";
import HeaderBar from "../../generic/navigation/HeaderBar";

const NavBars = (props = {}) => {
  let children, drawerOpen;
  ({ children, drawerOpen = false, ...props } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <HeaderBar {...{ toggleDrawer }}>{children}</HeaderBar>

      <SideBar {...{ state: drawerState, toggleDrawer }} />
    </>
  );
};

export default NavBars;
