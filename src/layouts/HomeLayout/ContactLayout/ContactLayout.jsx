import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import {
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  ArrowRightIcon,
} from "../../../components/Icons/Icons";
import { personalInfo } from "../../../data/portfolio";
import styles from "./ContactLayout.module.css";

export default function ContactLayout() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <Reveal className={`card glass-hi ${styles.card}`}>
          <div className={styles.glowTop}></div>
          <div className={styles.glowBottom}></div>

          <div className={styles.grid}>
            <div>
              <SectionLabel number="06" label="Contact" />
              <h2 className={`${styles.headline} text-fade`}>
                Let's build{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  something
                </span>
                .
              </h2>
              <p className={styles.subhead}>
                Recruiting, contracting, or just curious — the inbox is open. I
                usually reply within 24 hours.
              </p>

              <div className={styles.socials}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`group ${styles.socialLink}`}
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
                  className={`group ${styles.socialLink}`}
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
                  className={`group ${styles.socialLink}`}
                >
                  <span className={`glass ${styles.iconBox}`}>
                    <GithubIcon />
                  </span>
                  GitHub
                </a>
              </div>
            </div>

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
                  rows="4"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="What are you building?"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
              >
                Send message <ArrowRightIcon size={14} />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
