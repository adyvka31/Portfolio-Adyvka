import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import styles from "./AboutLayout.module.css";

function AboutLayout() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <SectionLabel number="01" label="About" />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.headlineCol}>
            <h2 className={`${styles.headline} text-fade`}>
              An engineer who treats{" "}
              <span className={`font-serif ${styles.italic} text-glow`}>
                craft
              </span>{" "}
              like a contract — every commit a quiet promise that the next
              person reading this code will understand it.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className={styles.copyCol}>
            <p className={styles.paragraph}>
              I'm Rafif Sava Adyvka Pratama — a full-stack engineer based in
              West Java, Indonesia. I've spent the last few years shipping web
              and mobile products under tight deadlines, from ERP modules used
              internally by enterprise teams to e-commerce platforms with real
              revenue on the line.
            </p>
            <p className={styles.paragraph}>
              My approach is opinionated: Clean Architecture, SOLID, type-safe
              boundaries, and relentless attention to the developer experience
              for whoever comes next. I care about{" "}
              <em className="font-serif">how</em> things are built almost as
              much as <em className="font-serif">what</em> gets built.
            </p>
            <p className={styles.paragraph}>
              Outside of work, I graduated from Harvard's CS50, took first place
              at the national Icomfest 2025 web design competition, and
              volunteer teaching tech to students who'd otherwise never touch a
              keyboard.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutLayout;
