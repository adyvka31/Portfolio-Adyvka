import { useRef, useEffect, useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import profilePhoto from "../../assets/rafif-sava-adyvka-pratama-software-engineer.webp";
import cvPdfFile from "../../assets/RafifSavaAdyvkaPratama_CV.pdf";
import styles from "./LanyardBadge.module.css";

const DEFAULT_FACTS = [
  { label: "Alias", value: "Adyvka" },
  { label: "Base", value: "Depok, West Java, ID" },
  { label: "Affiliation", value: "PT Intisel & PT Ardyanda" },
  { label: "Education", value: "SMK IDN (Software Engineering)" },
  { label: "Academics", value: "96 / 100 GPA (Honors)" },
];

function LanyardBadge({ facts = DEFAULT_FACTS }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const claspRef = useRef(null);

  // SVG dynamic ribbon path refs
  const strapShadowRef = useRef(null);
  const strapBodyRef = useRef(null);
  const strapTwillRef = useRef(null);
  const strapSheenRef = useRef(null);
  const leftStitchRef = useRef(null);
  const rightStitchRef = useRef(null);

  const animFrameRef = useRef(null);
  const [isGrabbed, setIsGrabbed] = useState(false);

  // Physics simulation state stored in ref for 60fps performance without React re-render lag
  const physicsRef = useRef({
    x: 8,
    y: 0,
    vx: 0,
    vy: 0,
    angle: 3,
    vRot: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    cardStartX: 0,
    cardStartY: 0,
    lastDragX: 0,
    lastDragY: 0,
    lastTime: 0,
    animating: true,
  });

  // Physics simulation loop
  const updatePhysics = useCallback(() => {
    const p = physicsRef.current;
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 420;
    const anchorX = width / 2;
    const anchorY = 24;
    const restY = 110;

    if (!p.isDragging) {
      // Spring force pulling back to resting origin
      const k = 0.046;
      const damping = 0.915;
      const fx = -k * p.x;
      const fy = -k * p.y;

      p.vx = (p.vx + fx) * damping;
      p.vy = (p.vy + fy) * damping;

      p.x += p.vx;
      p.y += p.vy;

      // Restoring pendulum torque for rotation
      const kRot = 0.055;
      const rotDamping = 0.88;
      const targetAngle = -p.x * 0.075 - p.vx * 0.12;
      const fRot = (targetAngle - p.angle) * kRot;

      p.vRot = (p.vRot + fRot) * rotDamping;
      p.angle += p.vRot;

      // Check if settled to rest
      const isSettled =
        Math.abs(p.vx) < 0.015 &&
        Math.abs(p.vy) < 0.015 &&
        Math.abs(p.x) < 0.05 &&
        Math.abs(p.y) < 0.05 &&
        Math.abs(p.angle) < 0.05;

      if (isSettled) {
        p.x = 0;
        p.y = 0;
        p.vx = 0;
        p.vy = 0;
        p.angle = 0;
        p.vRot = 0;
        p.animating = false;
      }
    }

    // Coordinates for card attachment and strap connection
    const cardTopX = anchorX + p.x;
    const cardTopY = restY + p.y;

    // Apply card transform
    if (cardRef.current) {
      cardRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.angle}deg)`;
    }

    // Apply clasp transform
    if (claspRef.current) {
      claspRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.angle}deg)`;
    }

    // Calculate dynamic curved path for the single wide solid lanyard ribbon
    const midX = (anchorX + cardTopX) / 2;
    const midY = (anchorY + cardTopY) / 2;
    const slack = p.y < 0 ? Math.abs(p.y) * 0.45 : 0;
    const ctrlX = midX + p.x * 0.15;
    const ctrlY = midY + 12 + slack;

    const centerD = `M ${anchorX} ${anchorY} Q ${ctrlX} ${ctrlY} ${cardTopX} ${cardTopY}`;
    const leftD = `M ${anchorX - 12} ${anchorY} Q ${ctrlX - 12} ${ctrlY} ${cardTopX - 12} ${cardTopY}`;
    const rightD = `M ${anchorX + 12} ${anchorY} Q ${ctrlX + 12} ${ctrlY} ${cardTopX + 12} ${cardTopY}`;

    if (strapShadowRef.current) strapShadowRef.current.setAttribute("d", centerD);
    if (strapBodyRef.current) strapBodyRef.current.setAttribute("d", centerD);
    if (strapTwillRef.current) strapTwillRef.current.setAttribute("d", centerD);
    if (strapSheenRef.current) strapSheenRef.current.setAttribute("d", centerD);
    if (leftStitchRef.current) leftStitchRef.current.setAttribute("d", leftD);
    if (rightStitchRef.current) rightStitchRef.current.setAttribute("d", rightD);

    if (p.animating || p.isDragging) {
      animFrameRef.current = requestAnimationFrame(updatePhysics);
    }
  }, []);

  const startLoop = useCallback(() => {
    physicsRef.current.animating = true;
    cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(updatePhysics);
  }, [updatePhysics]);

  // Initial mount start simulation and ensure initial strap path is set
  useEffect(() => {
    startLoop();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [startLoop]);

  // Window blur safety
  useEffect(() => {
    const handleBlur = () => {
      const p = physicsRef.current;
      if (p.isDragging) {
        p.isDragging = false;
        setIsGrabbed(false);
      }
    };
    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, []);

  // Resize handler to update anchor coordinates
  useEffect(() => {
    const handleResize = () => {
      startLoop();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [startLoop]);

  // Drag move handler attached to window for 100% reliable tracking
  const handlePointerMove = useCallback((e) => {
    const p = physicsRef.current;
    if (!p.isDragging) return;

    if (e.cancelable) {
      e.preventDefault();
    }

    const now = performance.now();
    const dt = Math.max(8, Math.min(100, now - p.lastTime));
    p.lastTime = now;

    const dx = e.clientX - p.dragStartX;
    const dy = e.clientY - p.dragStartY;

    const rawX = p.cardStartX + dx;
    const rawY = p.cardStartY + dy;

    // Restrict upward push so card cannot be pushed past the ceiling anchor
    const clampedRawY = Math.max(-85, rawY);

    const dist = Math.hypot(rawX, clampedRawY);
    const maxDist = 320;
    const factor = dist > 0 ? (Math.atan(dist / 200) / (Math.PI / 2)) * maxDist / dist : 1;

    p.x = rawX * factor;
    p.y = clampedRawY * factor;

    // Track instantaneous release velocity with smoothing
    const instVx = ((e.clientX - p.lastDragX) / dt) * 16;
    const instVy = ((e.clientY - p.lastDragY) / dt) * 16;
    p.vx = p.vx * 0.4 + instVx * 0.6;
    p.vy = p.vy * 0.4 + instVy * 0.6;

    p.lastDragX = e.clientX;
    p.lastDragY = e.clientY;

    // Tilt card dynamically while pulling
    p.angle = Math.max(-26, Math.min(26, p.x * 0.075 + p.vx * 0.14));
  }, []);

  // Drag release handler attached to window
  const handlePointerUp = useCallback(() => {
    const p = physicsRef.current;
    if (!p.isDragging) return;
    p.isDragging = false;

    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    window.removeEventListener("pointercancel", handlePointerUp);

    // If user held still for more than 45ms before releasing, zero out toss velocity
    const timeSinceLastMove = performance.now() - p.lastTime;
    if (timeSinceLastMove > 45) {
      p.vx = 0;
      p.vy = 0;
    }

    // Clamp throw velocity to realistic momentum range
    const speed = Math.hypot(p.vx, p.vy);
    if (speed > 26) {
      p.vx = (p.vx / speed) * 26;
      p.vy = (p.vy / speed) * 26;
    }

    // Add rotational momentum from the throw
    p.vRot = p.vx * 0.15;
    setIsGrabbed(false);
  }, [handlePointerMove]);

  // Clean up global window drag listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  // Pointer down handler to initiate drag
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    if (e.target.closest("a, button")) return;
    e.preventDefault();

    const p = physicsRef.current;
    p.isDragging = true;
    p.animating = true;
    p.dragStartX = e.clientX;
    p.dragStartY = e.clientY;
    p.cardStartX = p.x;
    p.cardStartY = p.y;
    p.lastDragX = e.clientX;
    p.lastDragY = e.clientY;
    p.lastTime = performance.now();
    p.vx = 0;
    p.vy = 0;

    setIsGrabbed(true);
    startLoop();

    // Bind global listeners to capture cursor everywhere seamlessly
    window.addEventListener("pointermove", handlePointerMove, { passive: false });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  };

  return (
    <div
      ref={containerRef}
      className={styles.lanyardStage}
      aria-label="Interactive Lanyard Identity Badge"
    >
      {/* Top Anchor Wall Standoff Peg */}
      <div className={styles.lanyardAnchor} aria-hidden="true">
        <div className={styles.anchorPeg}>
          <div className={styles.anchorScrew}>
            <div className={styles.anchorScrewSlot} />
          </div>
        </div>
        <div className={styles.anchorPlate}>
          <span className={styles.anchorRivet} />
          <span className={styles.anchorLabel}>ADYVKA // ID PASS</span>
          <span className={styles.anchorRivet} />
        </div>
      </div>

      {/* SVG Canvas for realistic solid lanyard ribbon */}
      <svg className={styles.strapSvg} aria-hidden="true">
        <defs>
          {/* Deep realistic drop shadow */}
          <filter id="lanyardShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="7" floodColor="#000000" floodOpacity="0.85" />
          </filter>

          {/* Microscopic woven twill polyester texture */}
          <pattern id="lanyardTwill" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="#14141d" />
            <line x1="0" y1="2" x2="8" y2="2" stroke="#252538" strokeWidth="1.4" />
            <line x1="0" y1="6" x2="8" y2="6" stroke="#0e0e16" strokeWidth="1.4" />
          </pattern>

          {/* Tubular 3D satin ribbon gradient */}
          <linearGradient id="lanyardRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0c0c14" />
            <stop offset="20%" stopColor="#222234" />
            <stop offset="50%" stopColor="#32324a" />
            <stop offset="80%" stopColor="#222234" />
            <stop offset="100%" stopColor="#0c0c14" />
          </linearGradient>

          {/* Cyan stitched hem thread */}
          <linearGradient id="lanyardStitchGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7cf2ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0ea5d4" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Shadow layer */}
        <path
          ref={strapShadowRef}
          d="M 190 24 Q 190 67 190 110"
          stroke="#000000"
          strokeWidth="34"
          strokeLinecap="round"
          fill="none"
          filter="url(#lanyardShadow)"
          opacity="0.8"
        />

        {/* Solid woven ribbon body */}
        <path
          ref={strapBodyRef}
          d="M 190 24 Q 190 67 190 110"
          stroke="url(#lanyardRibbonGrad)"
          strokeWidth="34"
          strokeLinecap="round"
          fill="none"
        />

        {/* Woven twill texture overlay */}
        <path
          ref={strapTwillRef}
          d="M 190 24 Q 190 67 190 110"
          stroke="url(#lanyardTwill)"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* Center satin light sheen */}
        <path
          ref={strapSheenRef}
          d="M 190 24 Q 190 67 190 110"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Left edge stitched border */}
        <path
          ref={leftStitchRef}
          d="M 178 24 Q 178 67 178 110"
          stroke="url(#lanyardStitchGrad)"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Right edge stitched border */}
        <path
          ref={rightStitchRef}
          d="M 202 24 Q 202 67 202 110"
          stroke="url(#lanyardStitchGrad)"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          fill="none"
        />
      </svg>

      {/* Metal Clasp Assembly connecting strap to badge slot */}
      <div ref={claspRef} className={styles.claspAssembly} aria-hidden="true">
        <div className={styles.crimpMetal}>
          <span className={styles.crimpLine} />
          <span className={styles.crimpLine} />
          <span className={styles.crimpLine} />
        </div>
        <div className={styles.swivelRing} />
        <div className={styles.carabinerHook}>
          <span className={styles.carabinerGate} />
        </div>
      </div>

      {/* Interactive Badge Card */}
      <div
        ref={cardRef}
        className={`${styles.badgeCard} ${isGrabbed ? styles.badgeCardActive : ""}`}
        onPointerDown={handlePointerDown}
        onDragStart={(e) => e.preventDefault()}
        role="region"
        aria-label="Draggable ID Badge Card"
      >
        {/* Badge Hole Punch Slot */}
        <div className={styles.badgeSlot} aria-hidden="true">
          <div className={styles.slotHole} />
        </div>

        {/* Badge Header: Real Status and Timezone */}
        <div className={styles.badgeHeader}>
          <div className={styles.statusLive}>
            <span className={styles.livePulseDot} aria-hidden="true" />
            <span className={styles.statusLiveText}>Available for Projects</span>
          </div>
          <span className={styles.badgeTimezone}>UTC+7 · WIB</span>
        </div>

        {/* Photo Section with Status Badge */}
        <div className={styles.badgePhotoWrap}>
          <div className={styles.badgePhotoGlow} aria-hidden="true" />
          <Image
            src={profilePhoto}
            alt="Rafif Sava Adyvka Pratama, Lead Systems Engineer & Project Manager"
            className={styles.badgePhoto}
            width={700}
            height={700}
            sizes="(max-width: 768px) 100vw, 420px"
          />
          <div className={styles.badgePhotoOverlay} aria-hidden="true" />

          <div className={styles.badgeStatusPill}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusText}>EST. 2021 · Depok, ID</span>
          </div>
        </div>

        {/* Badge Body Specs */}
        <div className={styles.badgeBody}>
          <div className={styles.badgeNameHeader}>
            <div className={styles.badgeTitleBlock}>
              <span className={styles.badgeName}>Rafif Sava Adyvka Pratama</span>
              <span className={styles.badgeRole}>Lead Systems Engineer & PM</span>
            </div>
            {/* Microchip Graphic Icon */}
            <div className={styles.chipGraphic} aria-hidden="true">
              <span className={`${styles.chipLine} ${styles.chipLineH}`} />
              <span className={`${styles.chipLine} ${styles.chipLineV}`} />
            </div>
          </div>

          <dl className={styles.specsList}>
            {facts.map((f) => (
              <div key={f.label} className={styles.specRow}>
                <dt className={styles.specLabel}>{f.label}</dt>
                <dd className={styles.specValue}>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Badge Footer: High-Value Quick Actions */}
        <div className={styles.badgeFooter}>
          <a
            href={cvPdfFile}
            download="Rafif_Sava_Adyvka_Pratama_CV.pdf"
            className={styles.cvBtn}
            aria-label="Download Curriculum Vitae PDF"
          >
            <svg
              className={styles.btnIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
            <span>Download CV</span>
          </a>

          <Link
            to="/contact"
            className={styles.contactBtn}
            aria-label="Contact Rafif Sava Adyvka Pratama"
          >
            <svg
              className={styles.btnIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(LanyardBadge);
