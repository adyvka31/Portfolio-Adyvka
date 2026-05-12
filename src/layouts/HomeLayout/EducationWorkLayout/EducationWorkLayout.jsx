import styles from "./EducationWorkLayout.module.css";

const EducationWorkLayout = () => {
  const education = [
    {
      title: "SDIT Al-Manshuriyah",
      type: "Elementary School",
      year: "2015 - 2021",
    },
    {
      title: "SMP IDN Boarding School",
      type: "Junior High School",
      year: "2021 - 2024",
    },
    {
      title: "SMK IDN Boarding School",
      type: "Vocational High School",
      year: "2024 - 2027",
    },
  ];

  const work = [
    { title: "Teaching", company: "SMK Darussalam", year: "Feb 2024" },
    {
      title: "Front End App Developer",
      company: "Nano Studio",
      year: "Jun 2024",
    },
    {
      title: "Business Partner",
      company: "Bape Rent Car",
      year: "2024 - 2025",
    },
  ];

  return (
    <section className={styles.eduWorkSection}>
      <h1 className={styles.eduWorkTitle}>
        <span className={styles.textGreen}>EDUCATION</span> & WORK EXPERIENCE
      </h1>

      <div className={styles.eduWorkContainer}>
        {/* Education Column */}
        <div className={styles.column}>
          <h2>Education</h2>
          <hr />
          {education.map((item, idx) => (
            <div className={styles.listItem} key={idx}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.type}</p>
              </div>
              <button className={styles.yearBadge}>{item.year}</button>
            </div>
          ))}
        </div>

        {/* Work Column */}
        <div className={styles.column}>
          <h2>Work Experience</h2>
          <hr />
          {work.map((item, idx) => (
            <div className={styles.listItem} key={idx}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.company}</p>
              </div>
              <button className={styles.yearBadge}>{item.year}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationWorkLayout;
