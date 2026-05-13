import Reveal from "../../../components/Reveal/Reveal";
import SectionLabel from "../../../components/SectionLabel/SectionLabel";
import {
  PlusIcon,
  ServerIcon,
  CubeIcon,
} from "../../../components/Icons/Icons";
import { techStack } from "../../../data/portfolio";
import styles from "./StackLayout.module.css";

export default function StackLayout() {
  const icons = [
    <PlusIcon key="1" />,
    <ServerIcon key="2" />,
    <CubeIcon key="3" />,
  ];

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <SectionLabel number="03" label="Toolkit" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className={`${styles.headline} text-fade`}>
            A deliberate stack, chosen for{" "}
            <span className={`font-serif ${styles.italic} text-glow`}>
              durability
            </span>
            .
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {techStack.map((category, index) => (
            <Reveal
              key={category.title}
              delay={0.1 + index * 0.1}
              className={`card glass ${styles.card}`}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <span className={styles.icon}>{icons[index]}</span>
              </div>
              <ul className={styles.list}>
                {category.items.map((item) => (
                  <li key={item.name} className={styles.listItem}>
                    <span>{item.name}</span>
                    <span className={styles.years}>{item.years}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
