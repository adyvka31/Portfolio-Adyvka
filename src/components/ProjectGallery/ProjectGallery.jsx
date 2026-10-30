import { useState, useEffect, useCallback, useRef } from "react";
import Image from "../Image/Image";
import SectionLabel from "../SectionLabel/SectionLabel";
import NativeReveal from "../Reveal/NativeReveal";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MaximizeIcon,
  XIcon,
} from "../Icons/Icons";
import styles from "./ProjectGallery.module.css";

export default function ProjectGallery({
  items = [],
  id = "live-product",
  sectionNumber = "02",
  label = "PRODUCTION INTERFACES",
  title = "The Live System in Action",
  lead = "Explore high-fidelity production interfaces of the Databank Ecosystem — from operational analytics dashboards and role governance matrices to vendor PO workflows and high-throughput virtualized data tables.",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Touch tracking for swipe
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const total = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  if (!items || items.length === 0) return null;

  const current = items[currentIndex];
  const isMobileSlide = Boolean(current.isMobile);

  return (
    <section id={id} className={styles.gallerySection} aria-label="System Screenshots">
      <div className={styles.container}>
        <NativeReveal>
          <div className={styles.header}>
            <SectionLabel number={sectionNumber} label={label} />
            <h2 className={`${styles.title} text-fade`}>
              {title.split(" in Action")[0]}{" "}
              <span className="font-serif text-glow">in Action</span>
            </h2>
            <p className={styles.lead}>{lead}</p>
          </div>
        </NativeReveal>

        {/* INTERACTIVE TAB SELECTOR BAR */}
        <NativeReveal delay={0.05}>
          <div className={styles.tabBar} role="tablist" aria-label="Screenshot modules">
            {items.map((item, idx) => (
              <button
                key={item.id || idx}
                type="button"
                role="tab"
                aria-selected={currentIndex === idx}
                className={`${styles.tabBtn} ${
                  currentIndex === idx ? styles.tabBtnActive : ""
                }`}
                onClick={() => goToSlide(idx)}
              >
                <span className={styles.tabIndex}>
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </NativeReveal>

        {/* WINDOW FRAME (ADAPTIVE MACOS BROWSER / MOBILE FRAME) */}
        <NativeReveal delay={0.1}>
          <div className={styles.windowFrame}>
            {/* Chrome Header */}
            <div className={styles.windowChrome}>
              <div className={styles.windowControls} aria-hidden="true">
                {isMobileSlide ? (
                  <span className={styles.mobileBadge}>
                    <span className={styles.mobileDot} />
                    <span>Mobile Screen</span>
                  </span>
                ) : (
                  <>
                    <span className={`${styles.windowDot} ${styles.dotRed}`} />
                    <span className={`${styles.windowDot} ${styles.dotYellow}`} />
                    <span className={`${styles.windowDot} ${styles.dotGreen}`} />
                  </>
                )}
              </div>

              <div
                className={styles.urlBar}
                title={current.route || (isMobileSlide ? "mobile.app" : "databank.intisel.id")}
              >
                <span className={styles.urlSecure}>{isMobileSlide ? "📱" : "🔒"}</span>
                <span>{current.route || (isMobileSlide ? "mobile.app" : "databank.intisel.id")}</span>
              </div>

              <div className={styles.windowActions}>
                <button
                  type="button"
                  className={styles.actionBtn}
                  onClick={() => setIsLightboxOpen(true)}
                  title="Expand Fullscreen"
                  aria-label="Expand image to fullscreen"
                >
                  <MaximizeIcon size={14} />
                </button>
              </div>
            </div>

            {/* Viewport Slider */}
            <div
              className={`${styles.viewport} ${isMobileSlide ? styles.viewportMobile : ""}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={() => setIsLightboxOpen(true)}
              title="Click to view full resolution"
            >
              {/* Prev / Next Arrows */}
              <button
                type="button"
                className={`${styles.navArrow} ${styles.navArrowLeft}`}
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous screenshot"
              >
                <ChevronLeftIcon size={20} />
              </button>

              <button
                type="button"
                className={`${styles.navArrow} ${styles.navArrowRight}`}
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next screenshot"
              >
                <ChevronRightIcon size={20} />
              </button>

              {/* Main Slide Image */}
              <div className={`${styles.slideTrack} ${isMobileSlide ? styles.slideTrackMobile : ""}`}>
                {isMobileSlide ? (
                  <div className={styles.phoneFrame}>
                    <div className={styles.phoneIsland} aria-hidden="true" />
                    <Image
                      key={current.id || currentIndex}
                      src={current.image}
                      alt={current.title ? `${current.title} — Mobile Application Screen` : "Mobile Application Screen"}
                      className={styles.phoneImage}
                      width={430}
                      height={900}
                      priority={currentIndex === 0}
                    />
                  </div>
                ) : (
                  <Image
                    key={current.id || currentIndex}
                    src={current.image}
                    alt={current.title ? `${current.title} — Production Dashboard Interface` : "Production Dashboard Interface"}
                    className={styles.slideImage}
                    width={2940}
                    height={1674}
                    priority={currentIndex === 0}
                  />
                )}
              </div>
            </div>

            {/* Slide Information & Caption */}
            <div className={styles.infoPanel}>
              <div className={styles.infoLeft}>
                <div className={styles.infoMeta}>
                  <span className={styles.infoCounter}>
                    {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                  {current.tag && (
                    <span className={styles.infoTag}>{current.tag}</span>
                  )}
                </div>

                <h3 className={styles.infoTitle}>{current.title}</h3>
                <p className={styles.infoDesc}>{current.desc}</p>

                {current.features?.length > 0 && (
                  <div className={styles.featurePills}>
                    {current.features.map((feat, i) => (
                      <span key={i} className={styles.featurePill}>
                        ◆ {feat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Pagination Dots */}
              <div className={styles.dotsWrap} aria-label="Pagination Dots">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`${styles.dot} ${
                      currentIndex === idx ? styles.dotActive : ""
                    }`}
                    onClick={() => goToSlide(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </NativeReveal>

        {/* THUMBNAILS FILMSTRIP TRACK */}
        <NativeReveal delay={0.15}>
          <div
            className={`${styles.filmstrip} ${items.length === 5 ? styles.filmstrip5 : ""}`}
            role="group"
            aria-label="Screenshot thumbnails"
          >
            {items.map((item, idx) => (
              <button
                key={item.id || idx}
                type="button"
                className={`${styles.thumbCard} ${
                  currentIndex === idx ? styles.thumbCardActive : ""
                } ${item.isMobile ? styles.thumbCardMobile : ""}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Thumbnail ${idx + 1}: ${item.title}`}
              >
                <div
                  className={`${styles.thumbImageWrap} ${
                    item.isMobile ? styles.thumbImageWrapMobile : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title ? `${item.title} — Thumbnail View` : "Thumbnail View"}
                    className={`${styles.thumbImage} ${
                      item.isMobile ? styles.thumbImageMobile : ""
                    }`}
                    width={item.isMobile ? 180 : 600}
                    height={item.isMobile ? 360 : 340}
                  />
                </div>
                <div className={styles.thumbMeta}>
                  <span className={styles.thumbTitle}>{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </NativeReveal>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className={styles.lightboxBackdrop}
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightboxHeader}>
              <h4 className={styles.lightboxTitle}>
                {current.title} — {current.route || (isMobileSlide ? "mobile.app" : "databank.intisel.id")}
              </h4>
              <button
                type="button"
                className={styles.lightboxCloseBtn}
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close fullscreen modal"
              >
                <XIcon size={18} />
              </button>
            </div>

            <div
              className={`${styles.lightboxImageWrap} ${
                current.isMobile ? styles.lightboxImageWrapMobile : ""
              }`}
            >
              <Image
                src={current.image}
                alt={current.title ? `${current.title} — Fullscreen Production View` : "Fullscreen Production View"}
                className={`${styles.lightboxImage} ${
                  current.isMobile ? styles.lightboxImageMobile : ""
                }`}
                priority={true}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
