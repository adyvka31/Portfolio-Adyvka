import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ExperienceLayout.module.css";

const experiences = [
  {
    img: "/Image/IDN-Mengajar.jpg",
    title: "IDN Teaching",
    desc: "Basic of Programmer & Designer",
  },
  {
    img: "/Image/Workshop.jpeg",
    title: "Workshop",
    desc: "Google Developer Group",
  },
  {
    img: "/Image/IDN-Backpacker.png",
    title: "IDN Backpacker",
    desc: "Singapore, Malaysia, Thailand",
  },
  {
    img: "/Image/Visitasion.jpeg",
    title: "Visitasion",
    desc: "Indonesia The Natural School",
  },
  { img: "/Image/Competition.png", title: "Competition", desc: "Web Design" },
];

const ExperienceLayout = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h1 className={styles.experienceTitle}>GREAT EXPERIENCE</h1>
      <hr className={styles.dividerLine} />

      <div className={styles.swiperContainerCustom}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {experiences.map((exp, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.expCard}>
                <img src={exp.img} alt={exp.title} className={styles.expImg} />
                <div className={styles.expOverlay}>
                  <h2>{exp.title}</h2>
                  <p>{exp.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExperienceLayout;
