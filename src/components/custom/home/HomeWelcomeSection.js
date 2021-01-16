import React from "react";
import Section from "../../generic/sections/Section";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

import makeStyles from "@material-ui/styles/makeStyles";

console.log(window.innerHeight);

const HomeWelcomeSection = (props = {}) => {
  let color;
  ({ color = "primary" } = props);

  const classes = makeStyles(() => ({
    root: {
      height: parseInt(window.innerHeight) - 85 + "px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    },
    container: {},
  }))();

  return (
    <Section className={classes.root} color={color}>
      <span className={classes.container}>
        <Text align="right">Hi I'm</Text>
        <Title size={0}>Rob Molloy</Title>
        <Text>romolo.co.uk</Text>
      </span>
    </Section>
  );
};

export default HomeWelcomeSection;
