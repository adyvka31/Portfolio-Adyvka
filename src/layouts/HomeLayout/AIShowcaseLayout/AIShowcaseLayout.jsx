import Reveal from "../../../components/Reveal/Reveal";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import {
  SearchIcon,
  LayersIcon,
  GraphIcon,
} from "../../../components/Icons/Icons";
import { aiFeatures } from "../../../data/portfolio";
import styles from "./AIShowcaseLayout.module.css";

const FEATURE_ICONS = [SearchIcon, LayersIcon, GraphIcon];

function FeatureCard({ feature, Icon }) {
  const spotlight = useCardSpotlight();

  return (
    <div className={`card glass ${styles.card}`} {...spotlight}>
      <div className={styles.iconWrap}>
        <Icon />
      </div>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.description}>{feature.description}</p>
    </div>
  );
}

function AIShowcaseLayout() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.diamond}>◆</span>
            Currently exploring
          </div>
          <h2 className={`${styles.headline} text-fade`}>
            Where engineering meets{" "}
            <span className={`font-serif ${styles.italic} text-glow`}>
              intelligence
            </span>
            .
          </h2>
          <p className={styles.subhead}>
            The next chapter — bringing generative AI into the systems I already
            ship. Practical applications, not demos.
          </p>
        </Reveal>

        <Reveal delay={0.1} className={styles.grid}>
          {aiFeatures.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              Icon={FEATURE_ICONS[idx]}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default AIShowcaseLayout;
