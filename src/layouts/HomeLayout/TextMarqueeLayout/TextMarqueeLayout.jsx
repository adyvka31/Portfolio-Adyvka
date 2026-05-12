import styles from "./TextMarqueeLayout.module.css";

const TextMarqueeLayout = () => {
  const skills = [
    "FRONT END",
    "BACK END",
    "DESIGNER",
    "SOFTWARE ENGINEER",
    "WRITER",
    "IT SUPPORT",
  ];

  return (
    <div className={styles.textMarqueeContainer}>
      <div className={styles.textMarqueeTrack}>
        {/* Render dua kali agar efek infinite scroll mulus */}
        {[...skills, ...skills].map((skill, index) => (
          <div className={styles.textMarqueeItem} key={index}>
            <h1 className={styles.textMarqueeTitle}>{skill}</h1>
            <svg viewBox="0 0 300 100" className={styles.textMarqueeStar}>
              <g fill="#f9ae1b" transform="translate(150,50)">
                <polygon points="0,-40 -10,-5 -40,0 -10,5 0,40 10,5 40,0 10,-5" />
              </g>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextMarqueeLayout;
