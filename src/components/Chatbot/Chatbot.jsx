import { useState, useRef, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { findBestAnswer, QUICK_SUGGESTIONS } from "../../data/chatbotKnowledge";
import profilePhoto from "../../assets/rafif-sava-adyvka-pratama-software-engineer.webp";
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

  // Auto scroll to bottom
  const scrollToBottom = (behavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  // Lock body scroll on mobile when chat window is active
  useEffect(() => {
    if (!isOpen || isClosing) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;
    if (!isMobile) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
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

  return (
    <div
      className={`${styles.chatbotWrapper} ${
        isChatActive ? styles.chatbotWrapperOpen : ""
      }`}
    >
      {/* Chat Window Modal */}
      {isOpen && (
        <section
          className={`${styles.chatWindow} ${isClosing ? styles.chatWindowClosing : styles.chatWindowOpening}`}
          onAnimationEnd={handleAnimationEnd}
          role="dialog"
          aria-label="Ask Adyvka"
          aria-modal="true"
        >
          {/* Header (Clean minimal, human, single close button) */}
          <header className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.botAvatar}>
                <img
                  src={profilePhoto}
                  alt="Adyvka"
                  className={styles.botAvatarImg}
                  width={36}
                  height={36}
                />
                <span className={styles.avatarLiveDot} aria-hidden="true" />
              </div>
              <div className={styles.headerInfo}>
                <span className={styles.botName}>Adyvka</span>
                <span className={styles.botStatus}>Online</span>
              </div>
            </div>

            <button
              type="button"
              className={styles.headerCloseBtn}
              onClick={handleClose}
              title="Close conversation"
              aria-label="Close conversation"
            >
              <CloseIcon size={18} strokeWidth={2.2} />
            </button>
          </header>

          {/* Quick Suggestions Bar */}
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

      {/* Floating Circular Toggle Button (Avatar when closed, Close X when open) */}
      <button
        type="button"
        className={`${styles.launcherBtn} ${isChatActive ? styles.launcherBtnOpen : ""}`}
        onClick={handleToggle}
        title={isChatActive ? "Close conversation" : "Ask Adyvka"}
        aria-label={isChatActive ? "Close conversation" : "Ask Adyvka"}
        aria-expanded={isChatActive}
      >
        <div
          className={`${styles.iconLayer} ${styles.avatarLayer} ${isChatActive ? styles.layerHidden : styles.layerActive}`}
          aria-hidden={isChatActive}
        >
          <img
            src={profilePhoto}
            alt="Adyvka"
            className={styles.launcherAvatarImg}
            width={48}
            height={48}
          />
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
  );
}

export default memo(Chatbot);
