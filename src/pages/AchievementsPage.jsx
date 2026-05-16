// src/pages/AchievementsPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import Reveal from "../components/Reveal/Reveal";
import Tag from "../components/Tag/Tag";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { allAchievements } from "../data/portfolio";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import styles from "./IndexPage.module.css";
import local from "./AchievementsPage.module.css";

function Card({ item }) {
  const spot = useCardSpotlight();
  return (
    <Link
      to={`/achievements/${item.slug}`}
      className={`card glass ${local.card}`}
      {...spot}
    >
      <div className={local.imageWrap}>
        <img src={item.image} alt={item.title} className={local.image} />
        <div className={local.imageOverlay} />
        <span className={local.year}>{item.year}</span>
      </div>
      <div className={local.body}>
        <div className={local.institution}>— {item.institution}</div>
        <h3 className={local.title}>{item.title}</h3>
        <div className={local.tags}>
          {item.tags?.slice(0, 3).map((t) => (
            <Tag key={t} size="xs">
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function AchievementsPage() {
  const [tab, setTab] = useState("all");
  const items =
    tab === "all"
      ? allAchievements
      : allAchievements.filter((a) => a.category === tab);

  return (
    <PageShell>
      <PageHero
        number="04"
        label="Achievements"
        title="Receipts, not résumé filler."
        italicWord="Receipts"
        description="Competitions won, events organised, students taught — the things that don't fit on a résumé bullet."
      />
      <section className={styles.controlsSection}>
        <div className={styles.controlsInner}>
          <Reveal className={styles.filters}>
            {["all", "experience", "achievement"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`${styles.chip} ${tab === t ? styles.chipActive : ""}`}
              >
                {t}
              </button>
            ))}
          </Reveal>
        </div>
      </section>
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.04}>
                <Card item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BottomCTA />
    </PageShell>
  );
}
