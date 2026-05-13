import HeroLayout from "../layouts/HomeLayout/HeroLayout/HeroLayout";
import TextMarqueeLayout from "../layouts/HomeLayout/TextMarqueeLayout/TextMarqueeLayout";
import AboutLayout from "../layouts/HomeLayout/AboutLayout/AboutLayout";
import ProjectLayout from "../layouts/HomeLayout/ProjectLayout/ProjectLayout";
import StackLayout from "../layouts/HomeLayout/StackLayout/StackLayout";
import AIShowcaseLayout from "../layouts/HomeLayout/AIShowcaseLayout/AIShowcaseLayout";
import ExperienceLayout from "../layouts/HomeLayout/ExperienceLayout/ExperienceLayout";
import AchievementLayout from "../layouts/HomeLayout/AchievementLayout/AchievementLayout";
import ContactLayout from "../layouts/HomeLayout/ContactLayout/ContactLayout";
import FooterLayout from "../layouts/HomeLayout/FooterLayout/FooterLayout";

const HomePage = () => {
  return (
    <main id="top" style={{ position: "relative" }}>
      <HeroLayout />
      <TextMarqueeLayout />
      <AboutLayout />
      <ProjectLayout />
      <StackLayout />
      <AIShowcaseLayout />
      <ExperienceLayout />
      <AchievementLayout />
      <ContactLayout />
      <FooterLayout />
    </main>
  );
};
export default HomePage;
