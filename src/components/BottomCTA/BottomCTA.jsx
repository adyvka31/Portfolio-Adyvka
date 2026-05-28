import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../Icons/Icons";
import styles from "./BottomCTA.module.css";

export default function BottomCTA({
  eyebrow = "What's next",
  // SENIOR FIX: Pindahkan tanda titik ke dalam prop default agar bisa diubah menjadi "?" atau "!" nantinya
  title = "Let's build something.",
  italicWord = "something",
  description = "Recruiting, contracting, or just curious — the inbox is open.",
}) {
  // SENIOR FIX: RegEx Case-Insensitive Split yang anti-gagal
  const renderTitle = () => {
    if (!italicWord) return title;

    // Pecah string dengan mengabaikan huruf besar/kecil (flag "i")
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
        <div className="css-reveal">
          <div className={styles.eyebrow}>{eyebrow}</div>
        </div>

        <div className="css-reveal">
          <h2 className={`${styles.title} text-fade`}>{renderTitle()}</h2>
        </div>

        <div className="css-reveal">
          <p className={styles.description}>{description}</p>
        </div>

        <div className="css-reveal">
          <a href="/#contact" className={`btn-primary ${styles.btn}`}>
            Get in touch <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
