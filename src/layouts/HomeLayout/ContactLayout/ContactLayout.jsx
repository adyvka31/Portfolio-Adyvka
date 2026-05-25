import { useRef, useState } from "react";
import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import profilePhoto from "../../../assets/profile2.webp?w=400;800;1200&format=avif;webp&as=picture";
import Image from "../../../components/Image/Image";
import {
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  ArrowRightIcon,
} from "../../../components/Icons/Icons";

import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

import { personalInfo } from "../../../data/portfolio";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";

import styles from "./ContactLayout.module.css";

export default function ContactLayout() {
  const spotlight = useCardSpotlight();

  const cardRef = useRef(null);

  const [formStatus, setFormStatus] = useState("IDLE");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("SUBMITTING");

    const form = e.target;
    const data = new FormData(form);

    try {
      // GANTI "YOUR_FORM_ID" DENGAN ID DARI FORMSPREE NANTI
      const response = await fetch("https://formspree.io/f/mkoevqya", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("SUCCESS");
        form.reset();
        // Kembalikan tombol ke state awal setelah 3 detik
        setTimeout(() => setFormStatus("IDLE"), 3000);
      } else {
        setFormStatus("ERROR");
      }
    } catch (error) {
      setFormStatus("ERROR");
    }
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
              <div
                className={`${styles.techIcon} ${styles.react} ${styles.xl}`}
              >
                <SiReact />
              </div>
              <div className={`${styles.techIcon} ${styles.js} ${styles.md}`}>
                <SiJavascript />
              </div>
              <div className={`${styles.techIcon} ${styles.ts} ${styles.lg}`}>
                <SiTypescript />
              </div>
              <div className={`${styles.techIcon} ${styles.next} ${styles.md}`}>
                <SiNextdotjs />
              </div>
              <div
                className={`${styles.techIcon} ${styles.tailwind} ${styles.lg}`}
              >
                <SiTailwindcss />
              </div>
              <div className={`${styles.techIcon} ${styles.node} ${styles.md}`}>
                <SiNodedotjs />
              </div>
              <div className={`${styles.techIcon} ${styles.git} ${styles.md}`}>
                <SiGit />
              </div>
              <div
                className={`${styles.techIcon} ${styles.figma} ${styles.lg}`}
              >
                <SiFigma />
              </div>
              <div
                className={`${styles.techIcon} ${styles.firebase} ${styles.md}`}
              >
                <SiFirebase />
              </div>
              <div
                className={`${styles.techIcon} ${styles.mongo} ${styles.lg}`}
              >
                <SiMongodb />
              </div>
              <div className={`${styles.techIcon} ${styles.html} ${styles.md}`}>
                <SiHtml5 />
              </div>
              <div className={`${styles.techIcon} ${styles.css} ${styles.md}`}>
                <FaCss3Alt />
              </div>
              <div className={`${styles.techIcon} ${styles.vite} ${styles.md}`}>
                <SiVite />
              </div>
              <div
                className={`${styles.techIcon} ${styles.redux} ${styles.sm}`}
              >
                <SiRedux />
              </div>
              <div
                className={`${styles.techIcon} ${styles.vercel} ${styles.sm}`}
              >
                <SiVercel />
              </div>
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
                <Image
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className={styles.ncAvatar}
                  width={100}
                  height={100}
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

              <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                  <label className={styles.label}>Name</label>
                  {/* Tambahkan atribut name */}
                  <input
                    type="text"
                    name="name"
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className={styles.label}>Email</label>
                  {/* Tambahkan atribut name */}
                  <input
                    type="email"
                    name="email"
                    required
                    className={styles.input}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className={styles.label}>Message</label>
                  {/* Tambahkan atribut name */}
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="What are you building?"
                  ></textarea>
                </div>

                {/* ✅ 5. Dynamic Button State */}
                <button
                  type="submit"
                  disabled={
                    formStatus === "SUBMITTING" || formStatus === "SUCCESS"
                  }
                  className={`btn-primary ${styles.submitBtn}`}
                  style={{
                    backgroundColor: formStatus === "SUCCESS" ? "#10b981" : "", 
                    borderColor: formStatus === "SUCCESS" ? "#10b981" : "",
                  }}
                >
                  {formStatus === "IDLE" && "Send message"}
                  {formStatus === "SUBMITTING" && "Sending..."}
                  {formStatus === "SUCCESS" && "Message Sent!"}
                  {formStatus === "ERROR" && "Failed. Try again."}
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
