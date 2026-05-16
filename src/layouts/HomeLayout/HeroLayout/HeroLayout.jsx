import Reveal from "../../../components/Reveal/Reveal";
import { ArrowRightIcon, GithubIcon } from "../../../components/Icons/Icons";
import { heroMetrics, personalInfo } from "../../../data/portfolio";
import styles from "./HeroLayout.module.css";
import profilePhoto from "../../../assets/profile.webp";

function HeroLayout() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.gridBg} grid-bg`} />
      <div className="aurora" />

      <div className="meteors">
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
        <span className="meteor"></span>
      </div>

      <div className={styles.statusLeft}>
        <span className={styles.statusLine} />
        <span className={`${styles.statusDot} pulse-dot`} />
        <span>Available for new opportunities · 2026</span>
      </div>

      {/* --- KANAN: Lokasi & Waktu --- */}
      <div className={styles.statusRight}>
        <span>
          {personalInfo.location}
          <span className={styles.statusRightSub}>
            {" "}
            // {personalInfo.timezone}
          </span>
        </span>
        <span className={styles.statusLine} />
      </div>

      <div className={styles.content}>
        <Reveal>
          <div className={styles.badge}>
            <span className={styles.diamond}>◆</span>
            {personalInfo.currentRole}
          </div>
        </Reveal>

        {/* --- EFEK 3D INTERTWINE --- */}
        <Reveal delay={0.06}>
          <div className={styles.headlineWrapper}>
            {/* Lapis 1: Teks Solid (Di Belakang Foto) */}
            <h1 className={`${styles.headline} ${styles.textBack}`}>
              <div>
                <span className="text-fade">Rafif</span>
                <span className={styles.gapTop}></span>
                <span className="text-fade">Sava</span>
              </div>
              <div>
                {/* Tambahkan styles.shiftAdyvka dan styles.shiftPratama di sini */}
                <span
                  className={`font-serif ${styles.italic} text-glow ${styles.shiftAdyvka}`}
                >
                  Adyvka
                </span>
                <span className={styles.gapBottom}></span>
                <span className={`text-fade ${styles.shiftPratama}`}>
                  Pratama
                </span>
              </div>
            </h1>

            {/* Lapis 2: Foto Anda (Di Tengah) */}
            <div className={styles.heroBgPhotoContainer}>
              <img
                src={profilePhoto}
                alt="Rafif Sava"
                className={styles.heroBgPhoto}
              />
            </div>

            {/* Lapis 3: Teks Garis Luar/Stroke (Di Depan Foto) */}
            <h1
              className={`${styles.headline} ${styles.textFront}`}
              aria-hidden="true"
            >
              <div>
                <span className={styles.textStrokeFade}>Rafif</span>
                <span className={styles.gapTop}></span>
                <span className={styles.textStrokeFade}>Sava</span>
              </div>
              <div>
                {/* Pastikan ditambahkan juga di Lapis 3 agar garis tepi ikut bergeser */}
                <span
                  className={`font-serif ${styles.italic} ${styles.textStrokeGlow} ${styles.shiftAdyvka}`}
                >
                  Adyvka
                </span>
                <span className={styles.gapBottom}></span>
                <span
                  className={`${styles.textStrokeFade} ${styles.shiftPratama}`}
                >
                  Pratama
                </span>
              </div>
            </h1>
          </div>
        </Reveal>
        {/* --------------------------- */}

        <Reveal delay={0.12}>
          <p className={styles.subhead}>
            I'm Adyvka — a full-stack engineer crafting production systems with
            React, NestJS, and PostgreSQL. Currently engineering an ERP platform
            serving enterprise clients, and exploring the edge of generative AI
            on the side.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className={styles.actions}>
            <a href="#work" className={`btn-primary ${styles.primaryBtn}`}>
              View selected work
              <ArrowRightIcon />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.secondaryBtn} glass-hi`}
            >
              <GithubIcon />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className={styles.metrics}>
            {heroMetrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <div className={`font-serif ${styles.metricValue} text-glow`}>
                  {metric.value === "1st" ? (
                    <>
                      1<span className={styles.metricSup}>st</span>
                    </>
                  ) : (
                    metric.value
                  )}
                </div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <a href="#trusted" className={styles.scrollCue}>
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}

export default HeroLayout;
