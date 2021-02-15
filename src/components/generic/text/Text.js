import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Text = (props = {}) => {
  let children,
    className,
    align,
    lineHeight,
    xsOverride,
    gutterBottom,
    Component,
    underline;

  ({
    children,
    className = "",
    align = "justify",
    lineHeight = 4,
    xsOverride = [],
    gutterBottom = false,
    Component = "p",
    underline = false,
    ...props
  } = props);

  const classes = makeStyles((theme) => ({
    root: {
      textAlign: align,
      lineHeight: `${theme.spacing(lineHeight)}px`,
      borderBottom: underline ? `1px solid ${theme.palette.grey.main}` : "none",
      margin: 0,
      marginBottom: gutterBottom ? theme.spacing(2) : 0,
    },
  }))();

  const xsClasses = xsOverride.map((opt) => `xs-style-${opt}`).join(" ");

  return (
    <Component
      className={`${className} ${classes.root} ${xsClasses}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
