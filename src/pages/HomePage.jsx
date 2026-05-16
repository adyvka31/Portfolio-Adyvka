// src/pages/HomePage.jsx
import HeroLayout from "../layouts/HomeLayout/HeroLayout/HeroLayout";
import TextMarqueeLayout from "../layouts/HomeLayout/TextMarqueeLayout/TextMarqueeLayout";
import AboutLayout from "../layouts/HomeLayout/AboutLayout/AboutLayout";
import ProjectLayout from "../layouts/HomeLayout/ProjectLayout/ProjectLayout";
import ExperienceLayout from "../layouts/HomeLayout/ExperienceLayout/ExperienceLayout";
import AchievementLayout from "../layouts/HomeLayout/AchievementLayout/AchievementLayout";
import ContactLayout from "../layouts/HomeLayout/ContactLayout/ContactLayout";
import FooterLayout from "../layouts/HomeLayout/FooterLayout/FooterLayout";

const HomePage = () => {
  return (
    <main id="top" style={{ position: "relative" }}>
      <HeroLayout />
      <TextMarqueeLayout />

      <div style={{ position: "relative" }}>
        <div className="global-dots" />

        <AboutLayout />
        <ProjectLayout />
        <ExperienceLayout />
        <AchievementLayout />
        <ContactLayout />
        <FooterLayout />
      </div>
    </main>
  );
};

export default HomePage;
