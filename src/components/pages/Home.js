import Section from "../generic/sections/Section";
import Text from "../generic/text/Text";
import HomeWelcomeSection from "../custom/home/HomeWelcomeSection";
import HomeIntroSection from "../custom/home/HomeIntroSection";

const Home = () => {
  return (
    <>
      <HomeWelcomeSection />

      <HomeIntroSection />

      <Section color="secondary" withContainer>
        <Text gutterBottom>
          New Project - check if there's a more recent version of the generic
          components. Lots of things to say and not much time to say it baa baa
          black sheep have you any wool. no not right now i'm working you idiot
        </Text>
        <Text gutterBottom>
          Pariatur qui mollit cupidatat ipsum laborum in. Sit tempor non velit
          ex ea sunt ullamco voluptate minim culpa. Velit proident aliqua in qui
          eiusmod Lorem amet mollit deserunt duis deserunt est velit. Qui
          commodo ea deserunt pariatur. Proident est excepteur consectetur culpa
          sit labore aute aliqua irure. Dolore in ea cupidatat sunt exercitation
          ea in culpa consectetur minim eiusmod voluptate.
        </Text>
        <Text>
          Commodo excepteur reprehenderit duis voluptate ea excepteur enim.
          Labore nulla commodo nulla elit incididunt amet deserunt eu pariatur.
          Nostrud voluptate laboris proident consectetur non dolore est ullamco
          veniam ut deserunt laborum sit. Eiusmod voluptate est magna ipsum
          deserunt.
        </Text>
      </Section>
      <Section withContainer>
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
    </>
  );
};

export default Home;
