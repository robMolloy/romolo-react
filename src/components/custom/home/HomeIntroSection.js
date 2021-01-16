import React from "react";
import Section from "../../generic/sections/Section";
import Text from "../../generic/text/Text";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Icon from "../media/Icon";
import { makeStyles } from "@material-ui/core";

const HomeIntroSection = (props = {}) => {
  let color;
  ({ color = "mono" } = props);

  const classes = makeStyles(() => ({
    imgContainer: {
      // background: 'url("favicon.svg") no-repeat center',
      height: "200px",
    },
  }))();

  return (
    <Section color={color} withContainer>
      <GridColumnToRow
        alignItems="center"
        wrap="wrap-reverse"
        array={[
          <>
            <Text gutterBottom>
              I make cutting-edge websites and apps that are fully installable
              to give the end-user the best possible user-exprience.
            </Text>
            <Text>
              As we make all our apps from scratch, they are customisable down
              to the last detail and for full convenience we'll even give you
              tools for you to change many parts of the project yourself.
            </Text>
          </>,
          <div className={classes.imgContainer}>
            <Icon />
          </div>,
        ]}
      />
    </Section>
  );
};

export default HomeIntroSection;
