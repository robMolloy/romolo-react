import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

import makeStyles from "@material-ui/styles/makeStyles";
import GitHub from "@material-ui/icons/GitHub";

console.log(window.innerHeight);

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);

  const classes = makeStyles((theme) => ({
    root: {
      height: parseInt(window.innerHeight) - 85 + "px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    container: {},
    iconsContainer: { position: "absolute", bottom: 0 },
    icon: {
      fontSize: "3em",
      cursor: "pointer",
      color: theme.palette[color].contrastText,
      "&:hover": { fontSize: "3.3em" },
    },
  }))();

  return (
    <Section className={classes.root} color={color}>
      <span className={classes.container}>
        <Text align="right">Hi I'm</Text>
        <Title size={0}>Rob Molloy</Title>
        <Text>romolo.co.uk</Text>
      </span>
      <span className={classes.iconsContainer}>
        <a
          href="https://github.com/robMolloy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className={classes.icon} />
        </a>
      </span>
    </Section>
  );
};

export default HomeWelcomeSection;
