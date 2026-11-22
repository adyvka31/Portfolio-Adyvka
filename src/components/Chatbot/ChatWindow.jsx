import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getContextualSuggestions } from "../../data/chatbotSuggestions";
import styles from "./Chatbot.module.css";

// SVG Icons
function SendIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CloseIcon({ size = 18, strokeWidth = 2.2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 12, className = "" }) {
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
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ChatBotIcon({ size = 20 }) {
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

// Markdown Text Formatter
function FormattedText({ text }) {
  if (!text) return null;

  const lines = text.split("\n");

  return (
    <div className={styles.messageText}>
      {lines.map((line, idx) => {
        const isBullet = line.trim().startsWith("* ");
        const content = isBullet ? line.trim().slice(2) : line;

        const boldParts = content.split(/(\*\*[^*]+\*\*)/g);
        const renderedLine = boldParts.map((bPart, bIdx) => {
          if (bPart.startsWith("**") && bPart.endsWith("**")) {
            return <strong key={`b-${bIdx}`}>{bPart.slice(2, -2)}</strong>;
          }

          const italicParts = bPart.split(/(\*[^*]+\*)/g);
          return italicParts.map((iPart, iIdx) => {
            if (iPart.startsWith("*") && iPart.endsWith("*") && iPart.length > 2) {
              return <em key={`i-${bIdx}-${iIdx}`}>{iPart.slice(1, -1)}</em>;
            }
            return iPart;
          });
        });

        if (isBullet) {
          return (
            <div key={idx} style={{ display: "flex", gap: "0.45rem", marginBottom: "0.3rem", paddingLeft: "0.35rem" }}>
              <span style={{ color: "var(--accent-glow, #7cf2ff)" }}>•</span>
              <div>{renderedLine}</div>
            </div>
          );
        }

        if (line.trim() === "") {
          return <div key={idx} style={{ height: "0.55rem" }} />;
        }

        return <p key={idx} style={{ margin: "0 0 0.45rem" }}>{renderedLine}</p>;
      })}
    </div>
  );
}

export default function ChatWindow({ isOpen, isClosing, onClose, onAnimationEnd, launcherRef }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const contextualSuggestions = useMemo(() => {
    return getContextualSuggestions(location?.pathname || "/");
  }, [location?.pathname]);

  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      title: "Adyvka Portfolio Assistant",
      text: `Hello! I am the interactive portfolio assistant for Rafif Sava Adyvka Pratama (Adyvka).

I have full access to Adyvka's verified records across software engineering, teaching, and leadership:
* **Academic Honors (96/100 GPA):** Semester 4 in Software Engineering at SMK IDN Boarding School.
* **Engineering Projects & Publications:** Built 18 software solutions (enterprise web systems, mobile apps, AI tools) and authored 2 published technical books.
* **Work Experience & Leadership:** 2+ years in industry across 4 companies, 10 teaching engagements, and 6 organizational leadership roles.
* **National Achievements:** 1st Place Champion at ICOMFEST 2025, 2nd Place at PNBITC, and National Finalist at Universitas Lampung.
* **Certifications:** 23 verified credentials, including Harvard University CS50, AWS Cloud Practitioner, and Coding Camp Full Stack Developer (Grade A).

You can ask me questions in **English** or **Bahasa Indonesia**. What would you like to explore?`,
      links: [
        { label: "Explore About Profile", url: "/about" },
        { label: "View Enterprise Projects", url: "/projects" },
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const lastUserMessageRef = useRef(null);
  const inputRef = useRef(null);
  const chatWindowRef = useRef(null);
  const suggestionsBarRef = useRef(null);
  const prevIsOpenRef = useRef(false);
  const knowledgeEngineRef = useRef(null);

  // Preload knowledge base secara asinkron saat modal chat dibuka
  useEffect(() => {
    import("../../data/chatbotKnowledge").then((mod) => {
      knowledgeEngineRef.current = mod;
    });
  }, []);

  // Focus input when chat window becomes active on desktop only (avoid triggering virtual keyboard on mobile)
  useEffect(() => {
    if (isOpen && !isClosing && typeof window !== "undefined") {
      const isTouchOrMobile =
        window.innerWidth <= 768 ||
        window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
        "ontouchstart" in window;

      if (!isTouchOrMobile) {
        inputRef.current?.focus({ preventScroll: true });
      }
    } else if (isClosing) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  }, [isOpen, isClosing]);

  // Scroll to user question
  const scrollToLastUserQuestion = (behavior = "smooth") => {
    const container = messagesContainerRef.current;
    const target = lastUserMessageRef.current;
    if (!container) return;

    if (target) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const offset = (targetRect.top - containerRect.top) + container.scrollTop - 12;
      container.scrollTo({
        top: Math.max(0, offset),
        behavior,
      });
    } else {
      if (behavior === "auto") {
        container.scrollTop = container.scrollHeight;
      } else {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToBottom = (behavior = "smooth") => {
    const container = messagesContainerRef.current;
    if (!container) return;
    if (behavior === "auto") {
      container.scrollTop = container.scrollHeight;
    } else {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Close chat on click outside or Escape
  useEffect(() => {
    if (!isOpen || isClosing) return;

    const handlePointerDownOutside = (e) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(e.target) &&
        launcherRef?.current &&
        !launcherRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    const handleKeyDownGlobal = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    document.addEventListener("keydown", handleKeyDownGlobal);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
      document.removeEventListener("keydown", handleKeyDownGlobal);
    };
  }, [isOpen, isClosing, onClose, launcherRef]);

  // Lock body scroll on mobile without resetting scroll position
  useEffect(() => {
    if (!isOpen || isClosing) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
    if (!isMobile) return;

    const originalOverflow = document.body.style.overflow;
    const originalOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overscrollBehavior = originalOverscroll;
    };
  }, [isOpen, isClosing]);

  // Track visual viewport for mobile keyboard positioning
  const [keyboardState, setKeyboardState] = useState({
    isOpen: false,
    top: null,
    cardHeight: null,
  });

  const activeKeyboardState = isOpen && !isClosing
    ? keyboardState
    : { isOpen: false, top: null, cardHeight: null };

  useEffect(() => {
    if (!isOpen || isClosing) return;
    if (typeof window === "undefined" || !window.visualViewport) return;

    const vv = window.visualViewport;

    const handleViewportChange = () => {
      const isMobile = window.innerWidth <= 640;
      if (!isMobile) {
        setKeyboardState((prev) => (prev.isOpen ? { isOpen: false, top: null, cardHeight: null } : prev));
        return;
      }

      const heightDiff = window.innerHeight - vv.height;
      const isKeyboard = heightDiff > 140;

      if (isKeyboard) {
        const safeTop = 48;
        const topPos = Math.max(8, (vv.offsetTop || 0) + safeTop);
        const cardH = Math.max(260, vv.height - safeTop - 12);

        setKeyboardState({
          isOpen: true,
          top: topPos,
          cardHeight: cardH,
        });

        requestAnimationFrame(() => {
          scrollToBottom("smooth");
        });
      } else {
        setKeyboardState((prev) => (prev.isOpen ? { isOpen: false, top: null, cardHeight: null } : prev));
      }
    };

    vv.addEventListener("resize", handleViewportChange);
    vv.addEventListener("scroll", handleViewportChange);

    return () => {
      vv.removeEventListener("resize", handleViewportChange);
      vv.removeEventListener("scroll", handleViewportChange);
    };
  }, [isOpen, isClosing]);

  useEffect(() => {
    if (!isOpen) {
      prevIsOpenRef.current = false;
      return;
    }

    const wasJustOpened = !prevIsOpenRef.current;
    prevIsOpenRef.current = true;

    if (messages.length <= 1 && !isTyping) {
      requestAnimationFrame(() => {
        if (messagesContainerRef.current && messages.length <= 1) {
          messagesContainerRef.current.scrollTop = 0;
        }
      });
      return;
    }

    if (wasJustOpened && messages.length > 1) {
      const scrollToLatest = () => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
      };

      scrollToLatest();
      requestAnimationFrame(scrollToLatest);
      const timer1 = setTimeout(scrollToLatest, 60);
      const timer2 = setTimeout(scrollToLatest, 180);
      const timer3 = setTimeout(scrollToLatest, 320);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isOpen, messages.length, isTyping]);

  useEffect(() => {
    if (!isOpen) return;

    if (isTyping) {
      scrollToBottom("smooth");
      return;
    }

    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.sender === "user") {
      scrollToBottom("smooth");
    } else if (lastMsg?.sender === "bot" && messages.length > 1) {
      scrollToLastUserQuestion("smooth");
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = useCallback((customQuery = null) => {
    const query = (customQuery || inputValue).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: time,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customQuery) setInputValue("");
    setIsTyping(true);

    setTimeout(async () => {
      let engine = knowledgeEngineRef.current;
      if (!engine) {
        engine = await import("../../data/chatbotKnowledge");
        knowledgeEngineRef.current = engine;
      }
      const answer = engine.findBestAnswer(query);

      const botMessage = {
        id: "bot-" + Date.now(),
        sender: "bot",
        title: answer.title,
        text: answer.text,
        links: answer.links,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 400);
  }, [inputValue, setMessages, setInputValue, setIsTyping]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLinkClick = (url) => {
    if (url.startsWith("http") || url.startsWith("mailto:")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url);
    }
  };

  const chatWindowDynamicStyle = activeKeyboardState.isOpen
    ? {
        position: "fixed",
        top: `${activeKeyboardState.top}px`,
        bottom: "auto",
        height: `${activeKeyboardState.cardHeight}px`,
        maxHeight: `${activeKeyboardState.cardHeight}px`,
        transition: "none",
      }
    : undefined;

  const lastUserMessageIndex = messages.map((m) => m.sender).lastIndexOf("user");

  return (
    <section
      ref={chatWindowRef}
      className={`${styles.chatWindow} ${isClosing ? styles.chatWindowClosing : styles.chatWindowOpening} ${activeKeyboardState.isOpen ? styles.chatWindowKeyboardOpen : ""}`}
      style={chatWindowDynamicStyle}
      onAnimationEnd={onAnimationEnd}
      role="dialog"
      aria-label="Ask Adyvka Assistant"
      aria-modal="true"
    >
      <header className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.botAvatar}>
            <div className={styles.botAvatarIconWrap}>
              <ChatBotIcon size={20} />
            </div>
            <span className={styles.avatarLiveDot} aria-hidden="true" />
          </div>
          <div className={styles.headerInfo}>
            <span className={styles.botName}>Adyvka Assistant</span>
            <span className={styles.botStatus}>
              <span className={styles.statusLabel}>Portfolio AI</span>
              <span className={styles.statusDivider} aria-hidden="true">•</span>
              <span className={styles.statusLive}>Online</span>
            </span>
          </div>
        </div>

        <button
          type="button"
          className={styles.headerCloseBtn}
          onClick={onClose}
          title="Close conversation"
          aria-label="Close conversation"
        >
          <CloseIcon size={18} strokeWidth={2.4} />
        </button>
      </header>

      {!activeKeyboardState.isOpen && (
        <div
          ref={suggestionsBarRef}
          className={styles.suggestionsBar}
          aria-label="Contextual Quick Suggestion Topics"
        >
          {contextualSuggestions.map((sug) => (
            <button
              key={sug.id}
              type="button"
              className={styles.suggestionChip}
              onClick={() => handleSendMessage(sug.query)}
            >
              {sug.label}
            </button>
          ))}
        </div>
      )}

      <div ref={messagesContainerRef} className={styles.messagesList}>
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            ref={idx === lastUserMessageIndex ? lastUserMessageRef : null}
            className={`${styles.messageRow} ${
              msg.sender === "user" ? styles.userRow : styles.botRow
            }`}
          >
            <div
              className={`${styles.messageBubble} ${
                msg.sender === "user" ? styles.userBubble : styles.botBubble
              } ${msg.links && msg.links.length > 0 ? styles.bubbleWithLinks : ""}`}
            >
              {msg.title && <div className={styles.messageTitle}>{msg.title}</div>}
              <FormattedText text={msg.text} />

              {msg.links && msg.links.length > 0 && (
                <div className={styles.linkButtonsWrap}>
                  {msg.links.map((link, lIdx) => (
                    <button
                      key={lIdx}
                      type="button"
                      className={styles.linkBtn}
                      onClick={() => handleLinkClick(link.url)}
                    >
                      <span className={styles.linkBtnLabel}>{link.label}</span>
                      <ArrowUpRightIcon size={12} className={styles.linkBtnIcon} />
                    </button>
                  ))}
                </div>
              )}

              <div className={styles.messageMeta}>
                <span>{msg.timestamp}</span>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className={`${styles.messageRow} ${styles.botRow}`}>
            <div className={`${styles.messageBubble} ${styles.botBubble} ${styles.typingBubble}`}>
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form
        className={styles.inputForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about Adyvka... (English / Indonesia)"
          className={styles.textInput}
          aria-label="Type question"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          className={styles.sendBtn}
          aria-label="Send Message"
        >
          <SendIcon size={16} />
        </button>
      </form>
    </section>
  );
}
