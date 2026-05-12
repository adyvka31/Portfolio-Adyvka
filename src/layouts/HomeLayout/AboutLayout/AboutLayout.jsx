import { useRef } from "react";
import styles from "./AboutLayout.module.css";

const AboutLayout = () => {
  const btnRef = useRef(null);
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    circleRef.current.style.left = `${x}px`;
    circleRef.current.style.top = `${y}px`;
    circleRef.current.style.transform = "translate(-50%, -50%) scale(1)";
    circleRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    circleRef.current.style.transform = "translate(-50%, -50%) scale(0)";
    circleRef.current.style.opacity = "0";
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <h1 className={styles.aboutHeadline}>
          HEY THERE, I'M <br /> ADYVKA PRATAMA
        </h1>
        <p className={styles.aboutDesc}>
          Full Stack Engineer with hands-on freelance and contract experience
          developing scalable web applications.
        </p>

        <button
          ref={btnRef}
          className={styles.btnMagnetic}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <span ref={circleRef} className={styles.circleBg}></span>
          <span className={styles.btnText}>linkedin.com/in/adyvka-pratama/</span>
        </button>
      </div>

      <div className={styles.aboutImageCard}>
        <div className={styles.cardBadge + " " + styles.topLeft}>31 Juli 2009</div>
        <div className={styles.cardBadge + " " + styles.bottomRight}>Jakarta, Indonesia</div>
        <img src="/Image/erasebg-transformed (2).png" alt="Profile" />
      </div>
    </section>
  );
};

export default AboutLayout;
