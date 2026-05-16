// src/layouts/HomeLayout/ContactLayout/ContactLayout.jsx

import { useRef } from "react";

import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";

import profilePhoto from "../../../assets/profile2.webp";

import {
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  ArrowRightIcon,
} from "../../../components/Icons/Icons";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiFirebase,
  SiMongodb,
  SiHtml5,
  SiVite,
  SiRedux,
  SiVercel,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

import { personalInfo } from "../../../data/portfolio";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";

import styles from "./ContactLayout.module.css";

export default function ContactLayout() {
  const spotlight = useCardSpotlight();

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 1. Variabel untuk glow efek (mouse & spotlight)
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
    cardRef.current.style.setProperty("--cx", `${x}px`);
    cardRef.current.style.setProperty("--cy", `${y}px`);

    // 2. Kalkulasi derajat rotasi untuk efek 3D (pengali 40 agar cukup terasa)
    const rotateY = (x / rect.width - 0.5) * 40;
    const rotateX = (y / rect.height - 0.5) * -40;

    // 3. Simpan ke variabel CSS (kita akan gunakan di .inner3D)
    cardRef.current.style.setProperty("--rotX", `${rotateX}deg`);
    cardRef.current.style.setProperty("--rotY", `${rotateY}deg`);
  };

  const resetCard = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotX", `0deg`);
    cardRef.current.style.setProperty("--rotY", `0deg`);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* =====================================
              INTERACTIVE PROFILE CARD
          ===================================== */}

          <Reveal
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetCard}
            className={`card glass-hi ${styles.cardName}`}
          >
            {/* Lapis 1: Flat Background & Element */}
            <div className={styles.mouseGlow}></div>
            <div className={styles.cardBorder}></div>

            {/* PINDAHKAN TECH BACKGROUND KE SINI (DI LUAR inner3D) */}
            <div className={styles.techStack}>
              <div className={`${styles.techIcon} ${styles.react} ${styles.xl}`}><SiReact /></div>
              <div className={`${styles.techIcon} ${styles.js} ${styles.md}`}><SiJavascript /></div>
              <div className={`${styles.techIcon} ${styles.ts} ${styles.lg}`}><SiTypescript /></div>
              <div className={`${styles.techIcon} ${styles.next} ${styles.md}`}><SiNextdotjs /></div>
              <div className={`${styles.techIcon} ${styles.tailwind} ${styles.lg}`}><SiTailwindcss /></div>
              <div className={`${styles.techIcon} ${styles.node} ${styles.md}`}><SiNodedotjs /></div>
              <div className={`${styles.techIcon} ${styles.git} ${styles.md}`}><SiGit /></div>
              <div className={`${styles.techIcon} ${styles.figma} ${styles.lg}`}><SiFigma /></div>
              <div className={`${styles.techIcon} ${styles.firebase} ${styles.md}`}><SiFirebase /></div>
              <div className={`${styles.techIcon} ${styles.mongo} ${styles.lg}`}><SiMongodb /></div>
              <div className={`${styles.techIcon} ${styles.html} ${styles.md}`}><SiHtml5 /></div>
              <div className={`${styles.techIcon} ${styles.css} ${styles.md}`}><FaCss3Alt /></div>
              <div className={`${styles.techIcon} ${styles.vite} ${styles.md}`}><SiVite /></div>
              <div className={`${styles.techIcon} ${styles.redux} ${styles.sm}`}><SiRedux /></div>
              <div className={`${styles.techIcon} ${styles.vercel} ${styles.sm}`}><SiVercel /></div>
            </div>

            {/* Lapis 2: Inner 3D Wrapper (Hanya Teks, Foto, dan Bottom Bar yang masuk sini) */}
            <div className={styles.inner3D}>
              <div className={styles.portraitGlow}></div>

              {/* CONTENT */}
              <div className={styles.ncContent}>
                <h3 className={styles.ncName}>
                  Rafif Sava
                  <br />
                  Adyvka P.
                </h3>
                <p className={styles.ncRole}>{personalInfo.role}</p>
              </div>

              {/* IMAGE */}
              <div className={styles.ncAvatarWrapper}>
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className={styles.ncAvatar}
                />
                <div className={styles.ncImageOverlay}></div>
              </div>

              {/* BOTTOM BAR */}
              <div className={styles.bottomBar}>
                <span>VHS IDN Boarding School Student</span>
                <div className={styles.bottomArrow}>
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <Reveal className={`card glass-hi ${styles.cardForm}`}>
            <div className={styles.glowTop}></div>

            <div className={styles.grid}>
              <div>
                <SectionLabel number="05" label="Contact" />

                <h2 className={`${styles.headline} text-fade`}>
                  Let's build{" "}
                  <span className={`font-serif ${styles.italic} text-glow`}>
                    something
                  </span>
                  .
                </h2>

                <p className={styles.subhead}>
                  Recruiting, contracting, or just curious — the inbox is open.
                  I usually reply within 24 hours.
                </p>

                <div className={styles.socials}>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={styles.socialLink}
                  >
                    <span className={`glass ${styles.iconBox}`}>
                      <MailIcon />
                    </span>
                    Send an email
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={`glass ${styles.iconBox}`}>
                      <LinkedInIcon />
                    </span>
                    LinkedIn
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={`glass ${styles.iconBox}`}>
                      <GithubIcon />
                    </span>
                    GitHub
                  </a>
                </div>
              </div>

              {/* FORM */}

              <form
                className={styles.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form ready — wire to your backend.");
                }}
              >
                <div>
                  <label className={styles.label}>Name</label>

                  <input
                    type="text"
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={styles.label}>Email</label>

                  <input
                    type="email"
                    required
                    className={styles.input}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className={styles.label}>Message</label>

                  <textarea
                    required
                    rows="5"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="What are you building?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                >
                  Send message
                  <ArrowRightIcon size={14} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
