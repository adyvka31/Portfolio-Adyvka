import { useState, useRef, useEffect, useCallback, memo, lazy, Suspense } from "react";
import styles from "./Chatbot.module.css";

const ChatWindow = lazy(() => import("./ChatWindow"));

function CloseIcon({ size = 20, strokeWidth = 2.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChatBotIcon({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.botIconSvg}
      aria-hidden="true"
    >
      <path d="M12 6V2.5" />
      <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
      <rect x="3.5" y="6" width="17" height="12" rx="4" />
      <path d="M8 18l-3.5 3.5v-3.5" strokeLinejoin="round" />
      <circle cx="9" cy="11.5" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11.5" r="1.25" fill="currentColor" stroke="none" />
      <path d="M10 14.5c.6.6 1.3.8 2 .8s1.4-.2 2-.8" strokeWidth="1.8" />
    </svg>
  );
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [bubbleState, setBubbleState] = useState("idle"); // "idle" | "visible" | "hidden"
  const launcherRef = useRef(null);

  const isChatActive = isOpen && !isClosing;
  const currentBubbleState = isChatActive ? "hidden" : bubbleState;

  // Idle prefetch knowledge engine: prefetch ChatWindow dan 646KB AI data saat browser idle agar instan saat user bertanya
  useEffect(() => {
    if (typeof window === "undefined") return;

    const schedulePreload = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => {
          import("./ChatWindow");
          import("../../data/chatbotKnowledge");
        }, { timeout: 3500 });
      } else {
        setTimeout(() => {
          import("./ChatWindow");
          import("../../data/chatbotKnowledge");
        }, 2000);
      }
    };

    if (document.readyState === "complete") {
      schedulePreload();
    } else {
      window.addEventListener("load", schedulePreload, { once: true });
      return () => window.removeEventListener("load", schedulePreload);
    }
  }, []);

  // Intent-driven prefetch: Dipanggil saat kursor mendekati launcher atau layar disentuh
  const prefetchKnowledge = useCallback(() => {
    import("./ChatWindow");
    import("../../data/chatbotKnowledge");
  }, []);

  const handleOpen = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    if (isClosing || !isOpen) return;
    setIsClosing(true);
  }, [isClosing, isOpen]);

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  // Safety fallback timer if onAnimationEnd doesn't fire
  useEffect(() => {
    if (!isClosing) return;
    const timer = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 280);
    return () => clearTimeout(timer);
  }, [isClosing]);

  const handleAnimationEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (isClosing) {
      setIsOpen(false);
      setIsClosing(false);
    }
  };

  // Periodic floating notification bubble ("Ask Adyvka")
  useEffect(() => {
    if (isChatActive) return;

    let showTimer;
    let hideTimer;
    let isCancelled = false;

    const scheduleCycle = (delay) => {
      showTimer = setTimeout(() => {
        if (isCancelled) return;
        setBubbleState("visible");

        hideTimer = setTimeout(() => {
          if (isCancelled) return;
          setBubbleState("hidden");
          scheduleCycle(3800);
        }, 4500);
      }, delay);
    };

    scheduleCycle(1600);

    return () => {
      isCancelled = true;
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isChatActive]);

  return (
    <>
      {/* Interactive Chat Window Modal - Instant 0ms render without network wait */}
      {(isOpen || isClosing) && (
        <Suspense fallback={null}>
          <ChatWindow
            isOpen={isOpen}
            isClosing={isClosing}
            onClose={handleClose}
            onAnimationEnd={handleAnimationEnd}
            launcherRef={launcherRef}
          />
        </Suspense>
      )}

      {/* Lightweight Floating Circular Toggle Button & Notification Bubble */}
      <div
        ref={launcherRef}
        className={styles.launcherWrapper}
        onPointerEnter={prefetchKnowledge}
        onTouchStart={prefetchKnowledge}
      >
        <div
          className={`${styles.bubbleBadge} ${
            currentBubbleState === "visible"
              ? styles.bubbleVisible
              : currentBubbleState === "hidden"
              ? styles.bubbleHidden
              : styles.bubbleIdle
          }`}
          onClick={handleToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleToggle();
            }
          }}
          aria-label="Ask Adyvka"
          title="Ask Adyvka"
        >
          <span className={styles.bubbleSparkle} aria-hidden="true">✦</span>
          <span className={styles.bubbleText}>Ask Adyvka</span>
        </div>

        <button
          type="button"
          className={`${styles.launcherBtn} ${isChatActive ? styles.launcherBtnOpen : ""}`}
          onClick={handleToggle}
          title={isChatActive ? "Close conversation" : "Ask Adyvka Assistant"}
          aria-label={isChatActive ? "Close conversation" : "Ask Adyvka Assistant"}
          aria-expanded={isChatActive}
        >
          <div
            className={`${styles.iconLayer} ${styles.botLayer} ${isChatActive ? styles.layerHidden : styles.layerActive}`}
            aria-hidden={isChatActive}
          >
            <div className={styles.launcherIconWrap}>
              <ChatBotIcon size={26} />
            </div>
            <span className={styles.pulseDot} aria-hidden="true" />
          </div>

          <div
            className={`${styles.iconLayer} ${styles.closeLayer} ${isChatActive ? styles.layerActive : styles.layerHidden}`}
            aria-hidden={!isChatActive}
          >
            <CloseIcon size={20} strokeWidth={2.4} />
          </div>
        </button>
      </div>
    </>
  );
}

export default memo(Chatbot);
