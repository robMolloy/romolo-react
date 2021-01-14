import Section from "../generic/sections/Section";
import Text from "../generic/text/Text";
// import { useTheme } from "@material-ui/core";

const Home = () => {
  // const theme = useTheme();
  // console.log(useTheme());

  return (
    <>
      <Section color="secondary" withContainer>
        <Text>
          New Project - check if there's a more recent version of the generic
          components.
        </Text>
      </Section>

      <Section withContainer>
        <Text gutterBottom>
          ishfsdkjh kjsdf sdfhh sdfkjsdf jdsfkhfdd ishfsdkjh kjsdf sdfhh
          sdfkjsdf jdsfkhfdd ishfsdkjh kjsdf sdfhh sdfkjsdf jdsfkhfdd ishfsdkjh
          kjsdf sdfhh sdfkjsdf jdsfkhfdd ishfsdkjh kjsdf sdfhh sdfkjsdf
          jdsfkhfdd ishfsdkjh kjsdf sdfhh sdfkjsdf jdsfkhfdd ishfsdkjh kjsdf
          sdfhh sdfkjsdf jdsfkhfdd ishfsdkjh kjsdf sdfhh sdfkjsdf jdsfkhfdd
          ishfsdkjh kjsdf sdfhh sdfkjsdf jdsfkhfdd ishfsdkjh kjsdf sdfhh
          sdfkjsdf jdsfkhfdd ishfsdkjh kjsdf sdfhh sdfkjsdf jdsfkhfdd
        </Text>
        <Text>
          New Project - check if there's a more recent version of the generic
          components.
        </Text>
      </Section>

      <Section color="primary" withContainer>
        <Text>
          New Project - check if there's a more recent version of the generic
          components.
        </Text>
      </Section>

      <Section color="tertiary" withContainer>
        <Text>
          New Project - check if there's a more recent version of the generic
          components.
        </Text>
      </Section>
    </>
  );
};

export default Home;
