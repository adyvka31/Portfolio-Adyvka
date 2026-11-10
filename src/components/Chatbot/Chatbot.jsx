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

  // Initial greeting
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      title: "Adyvka Portfolio Assistant",
      text: `Halo! Saya asisten portofolio Rafif Sava Adyvka Pratama (Adyvka).

Saya memiliki akses lengkap ke seluruh data dan rekam jejak Adyvka:
* **Nilai Rapot 96/100:** Semester 4 jurusan Rekayasa Perangkat Lunak SMK IDN Boarding School.
* **Pengalaman Kerja:** Lead Engineer Databank ERP di PT Intisel, Full Stack di PT Ardyanda, dan CV. Richo Bahari.
* **Karya Buku:** Penulis 2 buku teknis resmi (*Membuat Game 2D* dan *Membuat Website Modern*).
* **Petualangan Karakter:** Solo backpacker mandiri lintas 3 negara (Singapura, Malaysia, Thailand) di usia 15 tahun.
* **Sertifikasi:** CS50 Harvard University dan AWS Cloud Practitioner.

Ada hal spesifik yang ingin Anda tanyakan atau diskusikan?`,
      links: [
        { label: "Buka Profil About", url: "/about" },
        { label: "Lihat Proyek Enterprise", url: "/projects" },
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

    inputRef.current?.focus({ preventScroll: true });
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
    <div className={styles.chatbotWrapper}>
      {/* Chat Window Modal */}
      {isOpen && (
        <section
          className={`${styles.chatWindow} ${isClosing ? styles.chatWindowClosing : styles.chatWindowOpening}`}
          onAnimationEnd={handleAnimationEnd}
          role="dialog"
          aria-label="Tanya Adyvka"
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
              title="Tutup percakapan"
              aria-label="Tutup percakapan"
            >
              <CloseIcon size={18} strokeWidth={2.2} />
            </button>
          </header>

          {/* Quick Suggestions Bar */}
          <div className={styles.suggestionsBar} aria-label="Topik Pertanyaan Cepat">
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
              placeholder="Tanyakan apa saja tentang Adyvka..."
              className={styles.textInput}
              aria-label="Ketik pertanyaan"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className={styles.sendBtn}
              aria-label="Kirim Pesan"
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
        title={isChatActive ? "Tutup" : "Tanya Adyvka"}
        aria-label={isChatActive ? "Tutup chat" : "Buka chat Adyvka"}
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
