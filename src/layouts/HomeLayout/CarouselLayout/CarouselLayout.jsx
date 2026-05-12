import styles from "./CarouselLayout.module.css";

const certificates = [
  {
    img: "/Image/Kursus Figma - Coursera.png",
    title: "Figma",
    source: "Coursera",
  },
  {
    img: "/Image/Kursus C - Dicoding.png",
    title: "C Programming",
    source: "Dicoding",
  },
  { img: "/Image/Kursus Pyhton - DQLab.png", title: "Python", source: "DQLab" },
  {
    img: "/Image/Sertifikat Computer Science CS50.png",
    title: "Computer Science",
    source: "CS50 Harvard",
  },
];

const CarouselLayout = () => {
  return (
    <section className={styles.certificateSection}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack + " " + styles.slideRight}>
          {[...certificates, ...certificates].map((cert, idx) => (
            <div className={styles.certCard} key={idx}>
              <img src={cert.img} alt={cert.title} />
              <div className={styles.certOverlay}>
                <h3>{cert.title}</h3>
                <p>{cert.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Baris Kedua Berjalan ke Kiri */}
      <div className={styles.marqueeWrapper + " " + styles.mt4}>
        <div className={styles.marqueeTrack + " " + styles.slideLeft}>
          {[...certificates, ...certificates].reverse().map((cert, idx) => (
            <div className={styles.certCard} key={idx}>
              <img src={cert.img} alt={cert.title} />
              <div className={styles.certOverlay}>
                <h3>{cert.title}</h3>
                <p>{cert.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselLayout;
