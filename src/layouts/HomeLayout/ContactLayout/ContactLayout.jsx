import { useRef, useState, useEffect } from "react";
import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import profilePhoto from "../../../assets/profile3.webp?w=400;800;1200&format=avif;webp&as=picture";
import Image from "../../../components/Image/Image";

import {
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  ArrowRightIcon,
} from "../../../components/Icons/Icons";

import { personalInfo } from "../../../data/portfolio";
import { useCardSpotlight } from "../../../hooks/useCardSpotlight";
import styles from "./ContactLayout.module.css";

export default function ContactLayout() {
  const spotlight = useCardSpotlight();
  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const frameRef = useRef(null);
  const [formStatus, setFormStatus] = useState("IDLE");

  // =====================================
  // CACHE CARD RECT
  // =====================================
  useEffect(() => {
    const updateRect = () => {
      if (!cardRef.current) return;
      rectRef.current = cardRef.current.getBoundingClientRect();
    };
    updateRect();
    window.addEventListener("resize", updateRect, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // =====================================
  // MOUSE MOVE (3D Effect)
  // =====================================
  const handleMouseMove = (e) => {
    if (!cardRef.current || !rectRef.current) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const rect = rectRef.current;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.current.style.setProperty("--x", `${x}px`);
      cardRef.current.style.setProperty("--y", `${y}px`);
      cardRef.current.style.setProperty("--cx", `${x}px`);
      cardRef.current.style.setProperty("--cy", `${y}px`);

      // Mengurangi intensitas rotasi agar tidak terlalu ekstrim
      const rotateY = (x / rect.width - 0.5) * 30;
      const rotateX = (y / rect.height - 0.5) * -30;

      cardRef.current.style.setProperty("--rotX", `${rotateX}deg`);
      cardRef.current.style.setProperty("--rotY", `${rotateY}deg`);
    });
  };

  const resetCard = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotX", `0deg`);
    cardRef.current.style.setProperty("--rotY", `0deg`);
  };

  // =====================================
  // SUBMIT
  // =====================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("SUBMITTING");
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkoevqya", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("SUCCESS");
        form.reset();
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
            aria-label="Profile Card"
          >
            <div className={styles.mouseGlow} aria-hidden="true" />
            <div className={styles.cardBorder} aria-hidden="true" />
            <div className={styles.gridDotsBg} aria-hidden="true" />

            <div className={styles.inner3D}>
              <div className={styles.portraitGlow} aria-hidden="true" />

              <div className={styles.ncContent}>
                <h3 className={styles.ncName}>
                  Rafif Sava
                  <br />
                  Adyvka P.
                </h3>
                <p className={styles.ncRole}>{personalInfo.role}</p>
              </div>

              {/* SENIOR FIX: Avatar diletakkan secara mutlak (absolute) untuk stabilitas */}
              <div className={styles.ncAvatarWrapper} aria-hidden="true">
                <Image
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className={styles.ncAvatar}
                  width={470}
                  height={470}
                />
                <div className={styles.ncImageOverlay} />
              </div>

              <div className={styles.bottomBar}>
                <span className={styles.bottomText}>
                  VHS IDN Boarding School Student
                </span>
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
            <div className={styles.glowTop} aria-hidden="true" />

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

                <div className={styles.socials} role="list">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={styles.socialLink}
                    role="listitem"
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
                    role="listitem"
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
                    role="listitem"
                  >
                    <span className={`glass ${styles.iconBox}`}>
                      <GithubIcon />
                    </span>
                    GitHub
                  </a>
                </div>
              </div>

              {/* SENIOR FIX: A11y HTML Forms (id dan htmlFor dikaitkan) */}
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="contact-name" className={styles.label}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={styles.label}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    className={styles.input}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="5"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="What are you building?"
                  ></textarea>
                </div>

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
                  aria-live="polite"
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
