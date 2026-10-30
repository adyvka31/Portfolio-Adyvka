import SEO from "../../components/SEO/SEO";
import PageShell from "../../components/PageShell/PageShell";
import PageHero from "../../components/PageHero/PageHero";
import NativeReveal from "../../components/Reveal/NativeReveal";
import Card from "../../components/Card/Card";
import { allCertificates } from "../../data/portfolio";
import BottomCTA from "../../components/BottomCTA/BottomCTA";
import local from "./CertificatesPage.module.css";

const CERTIFICATE_KEYWORDS = [
  "Certificates Rafif Sava Adyvka Pratama",
  "Adyvka Certificates",
  "Harvard CS50 Certificate",
  "Dicoding Certificates",
  "DQLab Data Analyst",
  "Skillvul C++",
  "AWS Cloud Practitioner",
  "Verified Developer Credentials",
];

const CERTIFICATE_ITEMS = (allCertificates || []).map((c) => ({
  name: c.title,
  description: c.description || `Issued by ${c.institution || c.issuer}`,
  url: `/certificates/${c.slug}`,
}));

export default function CertificatesPage() {
  const items = allCertificates || [];

  return (
    <PageShell>
      <SEO
        title="Certificates — Rafif Sava Adyvka Pratama"
        description="Verified credentials and engineering certifications earned by Rafif Sava Adyvka Pratama (Adyvka) from Harvard CS50, Dicoding, AWS, and DQLab."
        path="/certificates"
        keywords={CERTIFICATE_KEYWORDS}
        itemList={CERTIFICATE_ITEMS}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Certificates", item: "/certificates" },
        ]}
      />
      <PageHero
        number="05"
        label="Certificates"
        title="Verified knowledge."
        italicWord="Verified"
        description="A curated collection of verified professional certifications and credentials demonstrating technical rigor, industry standards, and continuous learning."
      />

      <section className={local.gridSection} aria-label="Certificate Gallery">
        <div className={local.gridInner}>
          <div className={local.grid}>
            {items.map((item, i) => (
              <NativeReveal
                key={item.slug}
                delay={(i % 3) * 0.15}
                className="reveal-slide-up"
              >
                <Card variant="certificate" item={item} />
              </NativeReveal>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}
