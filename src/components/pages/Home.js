import HomeWelcomeSection from "../custom/home/HomeWelcomeSection";
import HomeIntroSection from "../custom/home/HomeIntroSection";
import HomeWhatICanDoSection from "../custom/home/HomeWhatICanDoSection";
import HomeLatestProjectsSection from "../custom/home/HomeLatestProjectsSection";
import HomeContactForm from "../custom/home/HomeContactForm";

const Home = () => {
  return (
    <>
      <HomeWelcomeSection />

      <HomeIntroSection />

      <HomeWhatICanDoSection />

      {/* <HomeLatestProjectsSection /> */}

      <HomeContactForm />
    </>
  );
};

export default Home;
