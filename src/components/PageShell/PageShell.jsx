import PageTransition from "../PageTransition/PageTransition";
import styles from "./PageShell.module.css";
import FooterLayout from "../../layouts/HomeLayout/FooterLayout/FooterLayout";

export default function PageShell({ children }) {
  return (
    <PageTransition>
      <main className={styles.main}>
        <div className={styles.background}>
          <div className="global-dots" />
        </div>
        <div className={styles.content}>{children}</div>
        <FooterLayout />
      </main>
    </PageTransition>
  );
}
