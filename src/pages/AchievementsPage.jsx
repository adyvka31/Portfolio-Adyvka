// src/pages/AchievementsPage.jsx
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import Reveal from "../components/Reveal/Reveal";
import Tag from "../components/Tag/Tag";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { allAchievements } from "../data/portfolio";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import Image from "../components/Image/Image";
import local from "./AchievementsPage.module.css";

function TextContentCard({ item }) {
  const spot = useCardSpotlight();

  return (
    // Gunakan class "glass" bawaan tema Anda + class lokal untuk layout
    <div className={`glass ${local.textCard}`} {...spot}>
      <div className={local.meta}>
        <span className={local.year}>{item.year}</span>
        <span className={local.institution}>{item.institution}</span>
      </div>

      <h3 className={local.title}>{item.title}</h3>

      <p className={local.description}>
        {item.description ||
          "Sebuah bukti nyata dari eksekusi teknis yang presisi, pemecahan masalah kompleks, dan dedikasi terhadap standar kualitas tertinggi."}
      </p>

      <div className={local.tags}>
        {item.tags?.slice(0, 4).map((t) => (
          <Tag key={t} size="sm">
            {t}
          </Tag>
        ))}
      </div>

      <div className={local.actionWrapper}>
        <Link to={`/achievements/${item.slug}`} className={local.readMore}>
          <span>Read the full story</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function AchievementsPage() {
  const storyItems = allAchievements.slice(0, 3);

  return (
    <PageShell>
      <PageHero
        number="04"
        label="Achievements"
        title="Receipts, not résumé filler."
        italicWord="Receipts"
        description="Achievements aren’t just a list on a resume. They’re a record of dedication, execution, and high standards. Here’s the story behind them."
      />

      <section className={local.storySection}>
        <div className={local.timelineLine}></div>

        <div className={local.storyContainer}>
          {storyItems.map((item, i) => {
            const isReverse = i % 2 !== 0;
            return (
              <Reveal key={item.slug} delay={0.2}>
                <div
                  className={`${local.storyBlock} ${isReverse ? local.reverse : ""}`}
                >
                  <div className={local.giantNumber}>0{i + 1}</div>

                  <div className={local.imageColumn}>
                    <Link
                      to={`/achievements/${item.slug}`}
                      className={local.imageWrap}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        className={local.image}
                        width={900}
                        height={560}
                      />
                      <div className={local.imageOverlay} />
                    </Link>
                  </div>

                  <div className={local.textColumn}>
                    <TextContentCard item={item} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
