import { Link } from "react-router-dom";
import NativeReveal from "../Reveal/NativeReveal";
import { ArrowRightIcon } from "../Icons/Icons";
import styles from "./BottomCTA.module.css";

export default function BottomCTA({
  eyebrow = "What's next",
  title = "Let's build something.",
  italicWord = "something",
  description = "Recruiting, contracting, or just curious — the inbox is open.",
}) {
  const renderTitle = () => {
    if (!italicWord) return title;

    const regex = new RegExp(`(${italicWord})`, "i");
    const parts = title.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === italicWord.toLowerCase() ? (
        <span key={i} className={`font-serif ${styles.italic} text-glow`}>
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  };

  return (
    <section className={styles.section} aria-label="Call to Action">
      <div className={styles.container}>
        <NativeReveal className="reveal-slide-up">
          <div className={styles.eyebrow}>{eyebrow}</div>
        </NativeReveal>

        <NativeReveal delay={0.1} className="reveal-slide-up">
          <h2 className={`${styles.title} text-fade`}>{renderTitle()}</h2>
        </NativeReveal>

        <NativeReveal delay={0.2} className="reveal-slide-up">
          <p className={styles.description}>{description}</p>
        </NativeReveal>

        <NativeReveal delay={0.3} className="reveal-slide-up">
          <a href="/#contact" className={`btn-primary ${styles.btn}`}>
            Get in touch <ArrowRightIcon size={16} />
          </a>
        </NativeReveal>
      </div>
    </section>
  );
}
