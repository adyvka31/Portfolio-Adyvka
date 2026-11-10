import { useState, useRef, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { findBestAnswer, QUICK_SUGGESTIONS } from "../../data/chatbotKnowledge";
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

function ArrowUpRightIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

// Modern AI Chatbot / Robot Icon for floating launcher
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
      {/* Robot Antenna with Signal Beacon */}
      <path d="M12 6V2.5" />
      <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />

      {/* Robot Head with Speech Bubble Contour */}
      <rect x="3.5" y="6" width="17" height="12" rx="4" />
      <path d="M8 18l-3.5 3.5v-3.5" strokeLinejoin="round" />

      {/* Expressive Glowing Eyes */}
      <circle cx="9" cy="11.5" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11.5" r="1.25" fill="currentColor" stroke="none" />

      {/* Friendly Curvature Smile */}
      <path d="M10 14.5c.6.6 1.3.8 2 .8s1.4-.2 2-.8" strokeWidth="1.8" />
    </svg>
  );
}

// Simple Markdown Text Formatter with bold and italic support
function FormattedText({ text }) {
  if (!text) return null;

  const lines = text.split("\n");

  return (
    <div className={styles.messageText}>
      {lines.map((line, idx) => {
        const isBullet = line.trim().startsWith("* ");
        const content = isBullet ? line.trim().slice(2) : line;

        // Parse bold (**...**) first
        const boldParts = content.split(/(\*\*[^*]+\*\*)/g);
        const renderedLine = boldParts.map((bPart, bIdx) => {
          if (bPart.startsWith("**") && bPart.endsWith("**")) {
            return <strong key={`b-${bIdx}`}>{bPart.slice(2, -2)}</strong>;
          }

          // Parse italic (*...*) in remaining text
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

function Chatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Smooth open and close handlers
  const handleOpen = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  const handleClose = () => {
    if (isClosing || !isOpen) return;
    inputRef.current?.blur();
    setIsClosing(true);
  };

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

  const isChatActive = isOpen && !isClosing;

  // Periodic floating notification bubble ("Ask Adyvka")
  const [bubbleState, setBubbleState] = useState("idle"); // "idle" | "visible" | "hidden"

  useEffect(() => {
    // If chat is open, immediately collapse bubble
    if (isChatActive) {
      setBubbleState("hidden");
      return;
    }

    let showTimer;
    let hideTimer;
    let isCancelled = false;

    const scheduleCycle = (delay) => {
      showTimer = setTimeout(() => {
        if (isCancelled) return;
        setBubbleState("visible");

        // Keep visible for 4.5s then collapse into button
        hideTimer = setTimeout(() => {
          if (isCancelled) return;
          setBubbleState("hidden");
          // Wait 3.8s before expanding again
          scheduleCycle(3800);
        }, 4500);
      }, delay);
    };

    // First appearance 1.6s after component mounts or chat closes
    scheduleCycle(1600);

    return () => {
      isCancelled = true;
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isChatActive]);

  // Initial greeting (English-first matching website with bilingual support notice)
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      title: "Adyvka Portfolio Assistant",
      text: `Hello! I am the interactive portfolio assistant for Rafif Sava Adyvka Pratama (Adyvka).

I have full access to Adyvka's verified records across software engineering, teaching, and leadership:
* **Academic Honors (96/100 GPA):** Semester 4 in Software Engineering at SMK IDN Boarding School.
* **Work Experience:** Lead Systems Engineer for Databank ERP at PT Intisel, Full Stack at PT Ardyanda, and CV. Richo Bahari.
* **Published Author:** Author of 2 technical books (*Making 2D Games* and *Modern Web Development*).
* **Character & Resilience:** Solo backpacker across 3 countries (Singapore, Malaysia, Thailand) at age 15.
* **Certifications:** Harvard University CS50 and AWS Cloud Practitioner.

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
  const inputRef = useRef(null);
  const chatWindowRef = useRef(null);
  const launcherRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = (behavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  // Close chat on pointerdown outside modal and launcher or on Escape key
  useEffect(() => {
    if (!isOpen || isClosing) return;

    const handlePointerDownOutside = (e) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(e.target) &&
        launcherRef.current &&
        !launcherRef.current.contains(e.target)
      ) {
        handleClose();
      }
    };

    const handleKeyDownGlobal = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("pointerdown", handlePointerDownOutside);
    document.addEventListener("keydown", handleKeyDownGlobal);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDownOutside);
      document.removeEventListener("keydown", handleKeyDownGlobal);
    };
  }, [isOpen, isClosing]);

  // Lock body scroll on mobile when chat window is active
  useEffect(() => {
    if (!isOpen || isClosing) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
    if (!isMobile) return;

    const scrollY = window.scrollY;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, isClosing]);

  // Track visual viewport for mobile keyboard positioning
  const [keyboardState, setKeyboardState] = useState({
    isOpen: false,
    top: null,
    cardHeight: null,
  });

  useEffect(() => {
    if (!isOpen || isClosing) {
      setKeyboardState({ isOpen: false, top: null, cardHeight: null });
      return;
    }

    if (typeof window === "undefined" || !window.visualViewport) return;

    const handleViewportChange = () => {
      const vv = window.visualViewport;
      if (!vv) return;

      const isMobile = window.innerWidth <= 640;
      if (!isMobile) {
        setKeyboardState({ isOpen: false, top: null, cardHeight: null });
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

        // Ensure messages list scrolls smoothly to bottom when keyboard opens
        requestAnimationFrame(() => {
          scrollToBottom("smooth");
        });
      } else {
        setKeyboardState({
          isOpen: false,
          top: null,
          cardHeight: null,
        });
      }
    };

    window.visualViewport.addEventListener("resize", handleViewportChange);
    window.visualViewport.addEventListener("scroll", handleViewportChange);

    return () => {
      window.visualViewport.removeEventListener("resize", handleViewportChange);
      window.visualViewport.removeEventListener("scroll", handleViewportChange);
    };
  }, [isOpen, isClosing]);

  useEffect(() => {
    if (!isOpen) return;

    if (messages.length > 1 || isTyping) {
      scrollToBottom();
    } else if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
      requestAnimationFrame(() => {
        if (messagesContainerRef.current && messages.length <= 1) {
          messagesContainerRef.current.scrollTop = 0;
        }
      });
    }

    // Only auto-focus on desktop so mobile on-screen keyboard does not aggressively pop up
    if (typeof window !== "undefined" && window.innerWidth > 640) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen, messages, isTyping]);

  // Handle send message
  const handleSendMessage = (customQuery = null) => {
    const query = (customQuery || inputValue).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Append user message
    const userMessage = {
      id: "user-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: time,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customQuery) setInputValue("");
    setIsTyping(true);

    // Simulate natural thinking delay
    setTimeout(() => {
      const answer = findBestAnswer(query);

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
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLinkClick = (url) => {
    if (!url) return;
    if (url.startsWith("http") || url.startsWith("mailto:")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url);
    }
  };

  const chatWindowDynamicStyle = keyboardState.isOpen
    ? {
        position: "fixed",
        top: `${keyboardState.top}px`,
        bottom: "auto",
        height: `${keyboardState.cardHeight}px`,
        maxHeight: `${keyboardState.cardHeight}px`,
        transition: "none",
      }
    : undefined;

  return (
    <>
      {/* Chat Window Modal */}
      {isOpen && (
        <section
          ref={chatWindowRef}
          className={`${styles.chatWindow} ${isClosing ? styles.chatWindowClosing : styles.chatWindowOpening} ${keyboardState.isOpen ? styles.chatWindowKeyboardOpen : ""}`}
          style={chatWindowDynamicStyle}
          onAnimationEnd={handleAnimationEnd}
          role="dialog"
          aria-label="Ask Adyvka Assistant"
          aria-modal="true"
        >
          {/* Header (Clean minimal, human, single close button) */}
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
              onClick={handleClose}
              title="Close conversation"
              aria-label="Close conversation"
            >
              <CloseIcon size={18} strokeWidth={2.4} />
            </button>
          </header>

          {/* Quick Suggestions Bar */}
          {!keyboardState.isOpen && (
            <div className={styles.suggestionsBar} aria-label="Quick Suggestion Topics">
              {QUICK_SUGGESTIONS.map((sug) => (
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

          {/* Messages Area */}
          <div ref={messagesContainerRef} className={styles.messagesList}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.messageRow} ${
                  msg.sender === "user" ? styles.userRow : styles.botRow
                }`}
              >
                <div
                  className={`${styles.messageBubble} ${
                    msg.sender === "user" ? styles.userBubble : styles.botBubble
                  }`}
                >
                  {msg.title && <div className={styles.messageTitle}>{msg.title}</div>}
                  <FormattedText text={msg.text} />

                  {/* Action Link Buttons */}
                  {msg.links && msg.links.length > 0 && (
                    <div className={styles.linkButtonsWrap}>
                      {msg.links.map((link, lIdx) => (
                        <button
                          key={lIdx}
                          type="button"
                          className={styles.linkBtn}
                          onClick={() => handleLinkClick(link.url)}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRightIcon size={11} />
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

            {/* Typing Indicator */}
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

          {/* Input Form */}
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
      )}

      {/* Floating Circular Toggle Button & Notification Bubble */}
      <div
        ref={launcherRef}
        className={`${styles.launcherWrapper} ${keyboardState.isOpen ? styles.launcherHiddenWhenKeyboard : ""}`}
      >
        {/* Floating Notification Badge ("Ask Adyvka") */}
        <div
          className={`${styles.bubbleBadge} ${
            bubbleState === "visible"
              ? styles.bubbleVisible
              : bubbleState === "hidden"
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
