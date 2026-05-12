import styles from "./ProjectLayout.module.css";

const projects = [
  {
    id: 1,
    title: "JavaIsland - Beauty of Java Island",
    img: "/Image/Thumbnail JavaIsland.png",
    link: "javaisland.vercel.app",
    color: "#0f7e66b1",
    tags: ["Web Design", "UI/UX Design"],
  },
  {
    id: 2,
    title: "Coffeee - Company Profile Landing Page",
    img: "/Image/Thumbnail Coffeee.png",
    link: "coffeee.vercel.app",
    color: "#78360fb1",
    tags: ["Web Design", "UI/UX Design"],
  },
  {
    id: 3,
    title: "PusakaKu - Remembering Traditional Culture",
    img: "/Image/Thumbnail Pusakaku.png",
    link: "pusakaku.vercel.app",
    color: "#5D8736b1",
    tags: ["Web Design", "UI/UX Design"],
  },
  {
    id: 4,
    title: "FitSmart - Public Health Education",
    img: "/Image/Thumbnail FitSmart.png",
    link: "fitsmart.vercel.app",
    color: "#207786b1",
    tags: ["Web Design", "UI/UX Design"],
  },
  {
    id: 5,
    title: "Payroll - Company Profile Landing Page",
    img: "/Image/Thumbnail Payroll.png",
    link: "payroll.vercel.app",
    color: "#7483d9b1",
    tags: ["Web Design", "Back End"],
  },
  {
    id: 6,
    title: "SemuaBisa - Traditional Indonesian Culture",
    img: "/Image/Thumbnail SemuaBisa.png",
    link: "semuabisa.vercel.app",
    color: "#2F3087b1",
    tags: ["Web Design", "UI/UX Design"],
  },
];

const ProjectLayout = () => {
  return (
    <section className={styles.projectSection} id="project">
      <h1 className={styles.projectHeading}>MY LATEST PROJECT</h1>

      <div className={styles.projectGrid}>
        {projects.map((proj) => (
          <div className={styles.projectCard} key={proj.id}>
            <div
              className={styles.projectImgWrapper}
              style={{ "--overlay-color": proj.color }}
            >
              <img src={proj.img} alt={proj.title} className={styles.projectImg} />
              <div className={styles.projectOverlay}>
                <p>{proj.link}</p>
              </div>
            </div>

            <div className={styles.projectTags}>
              {proj.tags.map((tag, i) => (
                <span className={styles.projectTag} key={i}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.projectInfo}>
              <h2 className={styles.projectTitle}>{proj.title}</h2>
              <button className={styles.projectBtnGo}>→</button>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.btnViewAll}>View All Projects</button>
    </section>
  );
};

export default ProjectLayout;
