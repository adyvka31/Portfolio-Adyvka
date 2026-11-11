import SEO from "../../components/SEO/SEO";
import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Card from "../../components/Card/Card";
import { allAchievements } from "../../data/portfolio";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import Image from "../../components/Image/Image";
import local from "./AchievementsPage.module.css";

const ACHIEVEMENT_KEYWORDS = [
  "Achievements Rafif Sava Adyvka Pratama",
  "Adyvka Awards",
  "PNBITC#18 Politeknik Negeri Bali",
  "Icomfest 2025 National Web Design",
  "1st Place National Web Design Competition",
  "2nd Place National Web Design Competition",
  "National Technology Competitions Indonesia",
  "Software Development Awards",
];

const ACHIEVEMENT_ITEMS = allAchievements.map((a) => ({
  name: a.title,
  description: a.description,
  url: `/achievements/${a.slug}`,
}));

export default function AchievementsPage() {
  const storyItems = allAchievements;

  return (
    <PageShell>
      <SEO
        title="Achievements · Rafif Sava Adyvka Pratama"
        description="National awards, software competition victories, and technological recognitions earned by Rafif Sava Adyvka Pratama (Adyvka)."
        path="/achievements"
        keywords={ACHIEVEMENT_KEYWORDS}
        itemList={ACHIEVEMENT_ITEMS}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Achievements", item: "/achievements" },
        ]}
      />
      <PageHero
        number="04"
        label="Achievements"
        title="Receipts, not résumé filler."
        italicWord="Receipts"
        description="National awards and competition victories won by stepping onto open stages to test engineering craft directly against collegiate competitors and industry standards."
        meta={[
          { label: "National Champion", value: "1st Place ICOMFEST 2025" },
          { label: "National Runner-Up", value: "2nd Place PNBITC#18 Bali" },
          { label: "Collegiate Finalist", value: "Top 5 Finalist UNILA 2024" },
          { label: "Academic Distinction", value: "SMK IDN Best Poster Award" },
        ]}
      />

      <section
        className={local.storySection}
        aria-label="Featured Achievements"
      >
        <div className={local.timelineLine} aria-hidden="true"></div>

        <div className={local.storyContainer}>
          {storyItems.map((item, i) => {
            const isReverse = i % 2 !== 0;
            return (
              <NativeReveal
                key={item.slug}
                delay={0.1}
                className="reveal-slide-up"
              >
                <div
                  className={`${local.storyBlock} ${isReverse ? local.reverse : ""}`}
                >
                  <div className={local.giantNumber} aria-hidden="true">
                    0{i + 1}
                  </div>

                  <div className={local.imageColumn}>
                    <Link
                      to={`/achievements/${item.slug}`}
                      className={local.imageWrap}
                      aria-label={`View images for ${item.title}`}
                      tabIndex={-1}
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title}, National Competition Honor & Stage Award`}
                        className={local.image}
                        width={900}
                        height={560}
                      />
                      <div className={local.imageOverlay} aria-hidden="true" />
                    </Link>
                  </div>

                  <div className={local.textColumn}>
                    <Card variant="story" item={item} />
                  </div>
                </div>
              </NativeReveal>
            );
          })}
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
