import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import styles from "./PageHero.module.css";

export default function PageHero({
  number,
  label,
  title,
  italicWord,
  description,
  meta,
}) {
  const renderTitle = () => {
    if (!italicWord) return <>{title}</>;
    const [before, after] = title.split(italicWord);
    return (
      <>
        {before}
        <span className={`font-serif ${styles.italic} text-glow`}>
          {italicWord}
        </span>
        {after}
      </>
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <SectionLabel number={number} label={label} />
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className={`${styles.title} text-fade`}>{renderTitle()}</h1>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className={styles.description}>{description}</p>
          </Reveal>
        )}
        {meta && (
          <Reveal delay={0.18}>
            <div className={styles.meta}>
              {meta.map((item, i) => (
                <div key={i} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{item.label}</span>
                  <span className={styles.metaValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
