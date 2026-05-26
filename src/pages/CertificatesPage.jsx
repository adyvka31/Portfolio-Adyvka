// src/pages/CertificatesPage.jsx
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell/PageShell";
import PageHero from "../components/PageHero/PageHero";
import Reveal from "../components/Reveal/Reveal";
import Tag from "../components/Tag/Tag";
import { useCardSpotlight } from "../hooks/useCardSpotlight";
import { allCertificates } from "../data/portfolio";
import BottomCTA from "../components/BottomCTA/BottomCTA";
import Image from "../components/Image/Image";
import local from "./CertificatesPage.module.css";

function CertificateCard({ item }) {
  const spot = useCardSpotlight();

  return (
    <Link
      to={`/certificates/${item.slug}`}
      className={`glass ${local.card}`}
      {...spot}
    >
      {/* 1. Verified Ribbon - Berada di luar gambar, mengikat ujung card */}
      <div className={local.verifiedBadge}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

      {/* Framed Image Display */}
      <div className={local.imageFrame}>
        <Image
          src={item.image}
          alt={item.title}
          className={local.image}
          width={600}
          height={450}
        />
        <div className={local.imageOverlay} />

        {/* Date Tag - Melayang di Kanan Atas */}
        <div className={local.dateTag}>{item.year}</div>
      </div>

      {/* Certificate Info */}
      <div className={local.info}>
        {/* Data Penyelenggara (Issuer) di atas Title */}
        <div className={local.meta}>
          <svg
            className={local.issuerIcon}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21h18M3 7v14a2 2 0 002 2h14a2 2 0 002-2V7M9 21V9h6v12M3 7l9-4 9 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={local.issuer}>{item.issuer}</span>
        </div>

        <h3 className={local.title}>{item.title}</h3>

        <div className={local.tags}>
          {item.tags?.slice(0, 3).map((t) => (
            <Tag key={t} size="xs">
              {t}
            </Tag>
          ))}
        </div>

        {/* Action Button - Design seperti Tag tapi Full Width */}
        <div className={local.actionBtn}>
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
    </Link>
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

      <section className={local.gridSection}>
        <div className={local.gridInner}>
          <div className={local.grid}>
            {items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.05}>
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
