// src/pages/CertificatesPage.jsx
import { Link } from "react-router-dom";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import Tag from "../../components/Tag/Tag";
import { useCardSpotlight } from "../../hooks/useCardSpotlight";
import { allCertificates } from "../../data/portfolio";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import Image from "../../components/Image/Image";
import local from "./CertificatesPage.module.css";

function CertificateCard({ item }) {
  const spot = useCardSpotlight();

  return (
    <article
      className={`glass ${local.card}`}
      {...spot}
      aria-label={`Certificate: ${item.title}`}
    >
      {/* SENIOR FIX: The Absolute Link Overlay */}
      <Link
        to={`/certificates/${item.slug}`}
        className={local.cardLinkOverlay}
        aria-label={`View details for ${item.title}`}
      />

      <div className={local.verifiedBadge} aria-hidden="true">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Verified
      </div>

      <div className={local.imageFrame}>
        <Image
          src={item.image}
          alt={`Certificate credential for ${item.title}`}
          className={local.image}
          width={600}
          height={450}
        />
        <div className={local.imageOverlay} aria-hidden="true" />
        <div className={local.dateTag} aria-label={`Issued in ${item.year}`}>
          {item.year}
        </div>
      </div>

      <div className={local.info}>
        <div className={local.institution}>— {item.institution}</div>
        <h3 className={local.title}>{item.title}</h3>

        {/* SENIOR FIX: Semantic <ul> untuk tags */}
        <ul className={local.tags} aria-label="Skills acquired">
          {item.tags?.slice(0, 3).map((t) => (
            <li key={t} style={{ listStyle: "none" }}>
              <Tag size="xs">{t}</Tag>
            </li>
          ))}
        </ul>

        <div className={local.actionBtn} aria-hidden="true">
          <span className={local.actionText}>View Credential</span>
          <svg
            className={local.actionIcon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </article>
  );
}

export default function CertificatesPage() {
  const items = allCertificates || [];

  return (
    <PageShell>
      <PageHero
        number="05"
        label="Certificates"
        title="Verified knowledge."
        italicWord="Verified"
        description="Koleksi sertifikasi dan lisensi profesional yang membuktikan kompetensi teknis, kredibilitas, dan komitmen saya terhadap pembelajaran berkelanjutan."
      />

      <section className={local.gridSection} aria-label="Certificate Gallery">
        <div className={local.gridInner}>
          <div className={local.grid}>
            {items.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 0.05}>
                <CertificateCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
