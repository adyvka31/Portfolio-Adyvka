import NativeReveal from "../Reveal/NativeReveal"; 
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
        <NativeReveal className="reveal-slide-up">
          <SectionLabel number={number} label={label} />
        </NativeReveal>

        <NativeReveal delay={0.05} className="reveal-slide-up">
          <h1 className={`${styles.title} text-fade`}>{renderTitle()}</h1>
        </NativeReveal>

        {description && (
          <NativeReveal delay={0.12} className="reveal-slide-up">
            <p className={styles.description}>{description}</p>
          </NativeReveal>
        )}

        {meta && (
          <NativeReveal delay={0.18} className="reveal-slide-up">
            <dl className={styles.meta} aria-label="Hero Metadata">
              {meta.map((item, i) => (
                <div key={i} className={styles.metaItem}>
                  <dt className={styles.metaLabel}>{item.label}</dt>
                  <dd className={styles.metaValue}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </NativeReveal>
        )}
      </div>
    </section>
  );
}
