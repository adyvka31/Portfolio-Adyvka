import HeroLayout from "../layouts/HomeLayout/HeroLayout/HeroLayout";
import BannerLayout from "../layouts/HomeLayout/BannerLayout/BannerLayout";
import AboutLayout from "../layouts/HomeLayout/AboutLayout/AboutLayout";
import TextMarqueeLayout from "../layouts/HomeLayout/TextMarqueeLayout/TextMarqueeLayout";
import ProjectLayout from "../layouts/HomeLayout/ProjectLayout/ProjectLayout";
import ExperienceLayout from "../layouts/HomeLayout/ExperienceLayout/ExperienceLayout";
import EducationWorkLayout from "../layouts/HomeLayout/EducationWorkLayout/EducationWorkLayout";
import CarouselLayout from "../layouts/HomeLayout/CarouselLayout/CarouselLayout";
import FooterLayout from "../layouts/HomeLayout/FooterLayout/FooterLayout";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroLayout />
      <BannerLayout />
      <AboutLayout />
      <TextMarqueeLayout />
      <ProjectLayout />
      <ExperienceLayout />
      <EducationWorkLayout />
      <CarouselLayout />
      <FooterLayout />
    </div>
  );
};
export default HomePage;
