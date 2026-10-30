import { useState, useRef } from "react";
import SEO from "../../components/SEO/SEO";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import {
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
} from "../../components/Icons/Icons";
import { personalInfo } from "../../data/portfolio";
import styles from "./ContactPage.module.css";

const CONTACT_KEYWORDS = [
  "Contact Rafif Sava Adyvka Pratama",
  "Adyvka Contact",
  "Adyvka Email",
  "Adyvka LinkedIn",
  "Adyvka GitHub",
  "Adyvka YouTube",
  "Adyvka Instagram",
  "Adyvka TikTok",
  "Hire Software Engineer Indonesia",
  "Full Stack Developer Depok",
  "Systems Architect Contact",
];

const INQUIRY_TYPES = [
  {
    title: "Software Engineering & Architecture",
    desc: "End-to-end full stack development, distributed systems architecture, clean architecture migrations, and API integrations.",
  },
  {
    title: "Technical Consultation & Code Review",
    desc: "Database schema modeling, performance profiling, security audits, and developer team mentorship.",
  },
  {
    title: "Workshops & Speaking Engagements",
    desc: "Hands-on coding workshops, pedagogical curriculum delivery, and technical speaking for students and developers.",
  },
];

function renderChannelIcon(iconId, size = 20) {
  switch (iconId) {
    case "mail":
      return <MailIcon size={size} />;
    case "linkedin":
      return <LinkedInIcon size={size} />;
    case "github":
      return <GithubIcon size={size} />;
    case "youtube":
      return <YoutubeIcon size={size} />;
    case "instagram":
      return <InstagramIcon size={size} />;
    case "tiktok":
      return <TiktokIcon size={size} />;
    default:
      return <ArrowUpRightIcon size={size} />;
  }
}

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("IDLE");
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2500);
  };

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
        setTimeout(() => setFormStatus("IDLE"), 4000);
      } else {
        setFormStatus("ERROR");
      }
    } catch {
      setFormStatus("ERROR");
    }
  };

  return (
    <PageShell>
      <SEO
        title="Contact & Channels — Rafif Sava Adyvka Pratama"
        description="Get in touch with Rafif Sava Adyvka Pratama (Adyvka) — Software Engineer & Systems Architect. Reach out via email, LinkedIn, GitHub, YouTube, Instagram, or TikTok."
        path="/contact"
        keywords={CONTACT_KEYWORDS}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />

      <PageHero
        number="06"
        label="Contact & Channels"
        title="Let's connect & build."
        italicWord="build"
        description="Available for high-autonomy engineering roles, enterprise architecture consulting, and technical collaboration. Reach out through the message console or connect across any platform."
        meta={[
          { label: "Status", value: "Available for Work" },
          { label: "Location", value: "Depok, West Java (UTC+07)" },
          { label: "Avg. Response", value: "< 24 Hours" },
          { label: "Primary Email", value: personalInfo.email },
        ]}
      />

      {/* SECTION 1: DIRECT COMMUNICATION CONSOLE */}
      <section className={styles.section} aria-label="Direct Communication Console">
        <div className={styles.container}>
          <div className={styles.consoleGrid}>
            {/* LEFT: Quick Info & Direct Access */}
            <NativeReveal className="reveal-slide-up">
              <div className={`card glass-hi ${styles.infoCard}`}>
                <div className={styles.infoGlow} aria-hidden="true" />
                <SectionLabel number="01" label="DIRECT INQUIRIES" />

                <h2 className={`${styles.infoTitle} text-fade`}>
                  Start a conversation.
                </h2>
                <p className={styles.infoLead}>
                  Whether you're recruiting, planning a contract engagement, or looking to discuss system architecture — the inbox is continuously monitored.
                </p>

                <div className={styles.directBlock}>
                  <span className={styles.blockLabel}>Primary Email</span>
                  <div className={styles.emailRow}>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className={styles.emailLink}
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className={styles.copyBtn}
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <>
                          <CheckIcon size={12} /> Copied
                        </>
                      ) : (
                        "Copy"
                      )}
                    </button>
                  </div>
                </div>

                <div className={styles.metricsBox}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Timezone</span>
                    <span className={styles.metricValue}>
                      <span className={`${styles.liveDot} pulse-dot`} aria-hidden="true" />
                      UTC+07 · WIB
                    </span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Location</span>
                    <span className={styles.metricValue}>Depok, West Java, ID</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Availability</span>
                    <span className={styles.metricValue}>Full-time / Contracts</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Expected Reply</span>
                    <span className={styles.metricValue}>Under 24 hours</span>
                  </div>
                </div>
              </div>
            </NativeReveal>

            {/* RIGHT: Formspree Message Form */}
            <NativeReveal delay={0.15} className="reveal-slide-up">
              <div className={`card glass-hi ${styles.formCard}`}>
                <SectionLabel number="02" label="DIRECT MESSAGE" />
                <h3 className={styles.formTitle}>Send a direct dispatch</h3>
                <p className={styles.formSubhead}>
                  Fill out the parameters below to route your message straight to my primary inbox.
                </p>

                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  aria-label="Contact dispatch form"
                >
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      className={styles.input}
                      placeholder="e.g. Alex Mercer"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      className={styles.input}
                      placeholder="alex@company.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-subject" className={styles.label}>
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      className={styles.input}
                      placeholder="e.g. Systems Architecture / Full Stack Role"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message" className={styles.label}>
                      Message Specifications
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows="5"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Briefly describe your project, team requirements, or discussion topic..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "SUBMITTING" || formStatus === "SUCCESS"}
                    className={`btn-primary ${styles.submitBtn}`}
                    style={{
                      backgroundColor: formStatus === "SUCCESS" ? "#10b981" : "",
                      borderColor: formStatus === "SUCCESS" ? "#10b981" : "",
                    }}
                    aria-live="polite"
                  >
                    {formStatus === "IDLE" && "Dispatch message"}
                    {formStatus === "SUBMITTING" && "Dispatching..."}
                    {formStatus === "SUCCESS" && "Message Dispatched Successfully!"}
                    {formStatus === "ERROR" && "Dispatch Failed. Please try again."}
                    <ArrowRightIcon size={14} />
                  </button>
                </form>
              </div>
            </NativeReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: DIGITAL CHANNELS & PRESENCE MATRIX */}
      {personalInfo.channels && (
        <section className={`${styles.section} ${styles.sectionAlt}`} aria-label="Digital Channels & Presence">
          <div className={styles.container}>
            <NativeReveal>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionHeaderTop}>
                  <SectionLabel number="03" label="DIGITAL ECOSYSTEM & CHANNELS" />
                  <span className={styles.channelsCounter}>
                    6 Active Channels
                  </span>
                </div>
                <h2 className={`${styles.sectionTitle} text-fade`}>
                  Connect across every{" "}
                  <span className={`font-serif ${styles.italic} text-glow`}>
                    platform
                  </span>
                  .
                </h2>
                <p className={styles.sectionLead}>
                  From code repositories and technical breakdowns to career milestones and short-form tech tips — explore my presence across the web.
                </p>
              </div>
            </NativeReveal>

            <div className={styles.channelsGrid}>
              {personalInfo.channels.map((channel, idx) => (
                <NativeReveal key={channel.id} delay={idx * 0.07}>
                  <a
                    href={channel.url}
                    target={channel.id === "email" ? undefined : "_blank"}
                    rel={channel.id === "email" ? undefined : "noopener noreferrer"}
                    className={`card glass ${styles.channelCard}`}
                    style={{ "--channel-accent": channel.accent }}
                  >
                    <div className={styles.channelCardTop}>
                      <div className={styles.channelIconBox}>
                        {renderChannelIcon(channel.icon, 20)}
                      </div>
                      <span className={styles.channelCategory}>{channel.category}</span>
                    </div>

                    <div className={styles.channelBody}>
                      <div className={styles.channelNameRow}>
                        <h3 className={styles.channelName}>{channel.name}</h3>
                        <ArrowUpRightIcon size={14} className={styles.channelArrow} />
                      </div>
                      <span className={styles.channelHandle}>{channel.handle}</span>
                      <p className={styles.channelDesc}>{channel.desc}</p>
                    </div>
                  </a>
                </NativeReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: COLLABORATION SCOPES */}
      <section className={styles.section} aria-label="Collaboration Domains">
        <div className={styles.container}>
          <NativeReveal>
            <div className={styles.sectionHeader}>
              <SectionLabel number="04" label="ENGAGEMENT DOMAINS" />
              <h2 className={`${styles.sectionTitle} text-fade`}>
                What I can deliver for your{" "}
                <span className={`font-serif ${styles.italic} text-glow`}>
                  team
                </span>
                .
              </h2>
            </div>
          </NativeReveal>

          <div className={styles.scopeGrid}>
            {INQUIRY_TYPES.map((scope, idx) => (
              <NativeReveal key={scope.title} delay={idx * 0.08}>
                <article className={`card glass ${styles.scopeCard}`}>
                  <span className={styles.scopeNumber}>// 0{idx + 1}</span>
                  <h3 className={styles.scopeTitle}>{scope.title}</h3>
                  <p className={styles.scopeDesc}>{scope.desc}</p>
                </article>
              </NativeReveal>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="Portfolio & Systems"
        title="Explore shipped engineering work."
        italicWord="engineering"
        description="Review 18+ production projects spanning enterprise systems, mobile applications, and distributed platforms."
        buttonText="Explore Projects"
        buttonTo="/projects"
      />
    </PageShell>
  );
}
