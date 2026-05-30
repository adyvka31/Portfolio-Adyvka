import { useEffect, useRef } from "react";
import NativeReveal from "../../../components/Reveal/NativeReveal"; // ✅ Import NativeReveal
import { ArrowRightIcon, GithubIcon } from "../../../components/Icons/Icons";
import { heroMetrics, personalInfo } from "../../../data/portfolio";
import styles from "./HeroLayout.module.css";
import profilePhoto from "../../../assets/profile.webp?w=400;800&quality=70&format=avif;webp&as=picture";
import Image from "../../../components/Image/Image";

function HeroLayout() {
  const heroRef = useRef(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Optimasi: Gunakan requestAnimationFrame untuk manipulasi class agar lebih smooth
        requestAnimationFrame(() => {
          if (entry.isIntersecting) {
            node.classList.remove(styles.paused);
          } else {
            node.classList.add(styles.paused);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={`${styles.gridBg} grid-bg`} aria-hidden="true" />
      <div className="aurora" aria-hidden="true" />

      <div className="meteors" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="meteor" />
        ))}
      </div>

      <div className={styles.statusLeft}>
        <NativeReveal
          delay={0.1}
          className="reveal-slide-up"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span className={styles.statusLine} />
          <span className={`${styles.statusDot} pulse-dot`} />
          <span>Available for new opportunities · 2026</span>
        </NativeReveal>
      </div>

      <div className={styles.statusRight}>
        <NativeReveal
          delay={0.2}
          className="reveal-slide-up"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span>
            {personalInfo.location}
            <span className={styles.statusRightSub}>
              {" "}
              // {personalInfo.timezone}
            </span>
          </span>
          <span className={styles.statusLine} />
        </NativeReveal>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>
          {/* ✅ 1. Badge muncul pertama (Delay: 0s) */}
          <NativeReveal className="reveal-slide-up">
            <div className={styles.badge}>
              <span className={styles.diamond}>◆</span>
              {personalInfo.currentRole}
            </div>
          </NativeReveal>

          {/* ✅ 2. Judul Utama & Foto 3 Lapis muncul bersamaan (Delay: 0.1s) */}
          <NativeReveal delay={0.1} className="reveal-slide-up">
            <div className={styles.headlineWrapper}>
              {/* Layer 1: Text Back */}
              <h1 className={`${styles.headline} ${styles.textBack}`}>
                <div>
                  <span className="text-fade">Rafif</span>
                  <span className={styles.gapTop} />
                  <span className="text-fade">Sava</span>
                </div>
                <div>
                  <span
                    className={`font-serif ${styles.italic} text-glow ${styles.shiftAdyvka}`}
                  >
                    Adyvka
                  </span>
                  <span className={styles.gapBottom} />
                  <span className={`text-fade ${styles.shiftPratama}`}>
                    Pratama
                  </span>
                </div>
              </h1>

              {/* Layer 2: Profile Photo Container */}
              <div className={styles.heroBgPhotoContainer}>
                <Image
                  src={profilePhoto}
                  alt="Rafif Sava Adyvka Pratama"
                  className={styles.heroBgPhoto}
                  width={800}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={true}
                />
              </div>

              {/* Layer 3: Text Front (Stroke Only) */}
              <h1
                className={`${styles.headline} ${styles.textFront}`}
                aria-hidden="true"
              >
                <div>
                  <span className={styles.textStrokeFade}>Rafif</span>
                  <span className={styles.gapTop} />
                  <span className={styles.textStrokeFade}>Sava</span>
                </div>
                <div>
                  <span
                    className={`font-serif ${styles.italic} ${styles.textStrokeGlow} ${styles.shiftAdyvka}`}
                  >
                    Adyvka
                  </span>
                  <span className={styles.gapBottom} />
                  <span
                    className={`${styles.textStrokeFade} ${styles.shiftPratama}`}
                  >
                    Pratama
                  </span>
                </div>
              </h1>
            </div>
          </NativeReveal>

          {/* ✅ 3. Subhead menyusul (Delay: 0.2s) */}
          <NativeReveal delay={0.2} className="reveal-slide-up">
            <p className={styles.subhead}>
              I'm Adyvka — a full-stack engineer crafting production systems
              with React, NestJS, and PostgreSQL. Currently engineering an ERP
              platform serving enterprise clients.
            </p>
          </NativeReveal>

          {/* ✅ 4. Tombol Aksi menyusul (Delay: 0.3s) */}
          <NativeReveal delay={0.3} className="reveal-slide-up">
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
          </NativeReveal>

          {/* ✅ 5. Metrik angka menyusul (Delay: 0.4s) */}
          <NativeReveal delay={0.4} className="reveal-slide-up">
            <div className={styles.metrics}>
              {heroMetrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <div className={`font-serif ${styles.metricValue} text-glow`}>
                    {metric.value}
                  </div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>
          </NativeReveal>
        </div>
      </div>

      {/* ✅ 6. Scroll Cue di paling bawah menyusul terakhir (Delay: 0.5s) */}
      <div className={styles.scrollCue}>
        {/* 2. Wadah Dalam (NativeReveal): 
            Bertugas melakukan animasi meluncur. 
            Karena dia berada di dalam wadah yang sudah fixed, 
            posisinya tidak akan melompat-lompat.
        */}
        <NativeReveal delay={0.5} className="reveal-slide-up">
          <a
            href="#trusted"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>Scroll</span>
            <span className={styles.scrollLine} />
          </a>
        </NativeReveal>
      </div>
    </section>
  );
}

export default HeroLayout;
