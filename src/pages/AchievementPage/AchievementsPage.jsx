import SEO from "../../components/SEO/SEO";
import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Tag from "../../components/Tag/Tag";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import { allAchievements } from "../../data/portfolio";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import Image from "../../components/Image/Image";
import local from "./AchievementsPage.module.css";

function TextContentCard({ item }) {
  const spot = useCardSpotlight();

  return (
    <article className={`glass ${local.textCard}`} {...spot}>
      <header className={local.meta}>
        <span className={local.year}>{item.year}</span>
        <span className={local.institution}>{item.institution}</span>
      </header>

      <h3 className={local.title}>{item.title}</h3>

      <p className={local.description}>
        {item.description ||
          "Sebuah bukti nyata dari eksekusi teknis yang presisi, pemecahan masalah kompleks, dan dedikasi terhadap standar kualitas tertinggi."}
      </p>

      <ul className={local.tags} aria-label="Skills and topics">
        {item.tags?.slice(0, 4).map((t) => (
          <li key={t} style={{ listStyle: "none" }}>
            <Tag size="sm">{t}</Tag>
          </li>
        ))}
      </ul>

      <footer className={local.actionWrapper}>
        <Link
          to={`/achievements/${item.slug}`}
          className={local.readMore}
          aria-label={`Read the full story about ${item.title}`}
        >
          <span>Read the full story</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
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
      </footer>
    </article>
  );
}

export default function AchievementsPage() {
  const storyItems = allAchievements.slice(0, 3);

  return (
    <PageShell>
      <SEO
        title="Achievements — Rafif Sava Adyvka Pratama"
        description="Awards, milestones, and recognitions earned by Rafif Sava Adyvka Pratama. A record of dedication and high standards in software development."
        path="/achievements"
      />
      <PageHero
        number="04"
        label="Achievements"
        title="Receipts, not résumé filler."
        italicWord="Receipts"
        description="Achievements aren’t just a list on a resume. They’re a record of dedication, execution, and high standards. Here’s the story behind them."
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
                        alt={`Highlight of ${item.title}`}
                        className={local.image}
                        width={900}
                        height={560}
                      />
                      <div className={local.imageOverlay} aria-hidden="true" />
                    </Link>
                  </div>

                  <div className={local.textColumn}>
                    <TextContentCard item={item} />
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
