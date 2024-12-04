import styles from "@/app/styles/my.module.css"
import AboutPage from "../components/About_layout";


export default function About() {
  return ( <>
    <AboutPage></AboutPage>
    <h1 className={styles.name}>정재승</h1>
    <h1 className={styles.no}>202230233</h1>
    <h1 className={styles.path}>D:\202230233 react\React02_DaeLim\final</h1>
    </>
  );
}
