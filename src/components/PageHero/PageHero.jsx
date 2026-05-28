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

    // SENIOR FIX: Gunakan Regex Case-Insensitive agar tidak rentan bug kapitalisasi
    const regex = new RegExp(`(${italicWord})`, "i");
    const parts = title.split(regex);

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === italicWord.toLowerCase() ? (
            <span
              key={index}
              className={`font-serif ${styles.italic} text-glow`}
            >
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          ),
        )}
      </>
    );
  };

  return (
    <section className={styles.section} aria-label={`${label} Hero Section`}>
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
            {/* SENIOR FIX: Semantic description list untuk data key-value */}
            <dl className={styles.meta} aria-label="Hero Metadata">
              {meta.map((item, i) => (
                <div key={i} className={styles.metaItem}>
                  <dt className={styles.metaLabel}>{item.label}</dt>
                  <dd className={styles.metaValue}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
}
