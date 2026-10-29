import SEO from "../../components/SEO/SEO";
import HeroLayout from "../../layouts/HomeLayout/HeroLayout/HeroLayout";
import TextMarqueeLayout from "../../layouts/HomeLayout/TextMarqueeLayout/TextMarqueeLayout";
import AboutLayout from "../../layouts/HomeLayout/AboutLayout/AboutLayout";
import ProjectLayout from "../../layouts/HomeLayout/ProjectLayout/ProjectLayout";
import ExperienceLayout from "../../layouts/HomeLayout/ExperienceLayout/ExperienceLayout";
import AchievementLayout from "../../layouts/HomeLayout/AchievementLayout/AchievementLayout";
import ContactLayout from "../../layouts/HomeLayout/ContactLayout/ContactLayout";
import FooterLayout from "../../layouts/HomeLayout/FooterLayout/FooterLayout";

const HOME_FAQ = [
  {
    question: "Who is Rafif Sava Adyvka Pratama (Adyvka)?",
    answer:
      "Rafif Sava Adyvka Pratama (known online as Adyvka) is an Indonesian Software Engineer and Systems Architect. He is currently lead engineer and Project Manager at PT Intisel Prodaktifakom, a Harvard CS50 graduate, and final-year student at SMK IDN Boarding School.",
  },
  {
    question: "What core systems and projects has Rafif Sava Adyvka Pratama built?",
    answer:
      "Rafif has architected and delivered enterprise platforms including Databank ERP for telecommunication operations, KEPK UMJ for medical research ethics evaluation, PusakaKu cultural platform, Terastani agricultural commerce, and Ruang Tumbuh pediatric screening.",
  },
  {
    question: "What national achievements has Adyvka won?",
    answer:
      "Rafif won 1st Place National Champion at ICOMFEST 2025 (Universitas Ahmad Dahlan) with PusakaKu, and 2nd Place National Runner-Up at PNBITC#18 (Politeknik Negeri Bali).",
  },
  {
    question: "What programming languages and architecture does Rafif specialize in?",
    answer:
      "Rafif is a polyglot engineer specializing in Clean Architecture, SOLID principles, and distributed systems across TypeScript, Python, Dart, PHP, C/C++, SQL, NestJS, React, Next.js, PostgreSQL, Flutter, and Docker.",
  },
];

const HomePage = () => {
  return (
    <>
      <SEO
        title="Rafif Sava Adyvka Pratama — Software Engineer & Systems Architect"
        description="Official portfolio of Rafif Sava Adyvka Pratama (Adyvka) — Software Engineer & Systems Architect. Polyglot builder engineering robust, scalable distributed systems across web, mobile, and cloud."
        path="/"
        type="profile"
        faq={HOME_FAQ}
        keywords={[
          "Rafif Sava Adyvka Pratama",
          "Rafif Sava",
          "Adyvka",
          "Adyvka Pratama",
          "Software Engineer",
          "Systems Architect",
          "Polyglot Developer",
          "Full Stack Engineer",
          "Portfolio Adyvka",
          "Databank ERP",
          "IDN Boarding School",
          "Harvard CS50",
        ]}
      />
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
    </>
  );
};

export default HomePage;
