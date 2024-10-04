import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beautiful UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <button className={styles.myButton}>Click me!</button>
      </div>
      <div>
        <button className={styles.rippleButton}>rippleButton</button>
      </div>
      <p className={styles.glowText}>Text here</p>

      <div className={styles.glassCard}>
        Other content
        <div>My content here</div>
      </div>
      <div className={styles.gradientBorder}>
        Other content
        <div>My content here</div>
      </div>

      <div className={styles.revealText}>This is my text to reveal!!</div>

      <div className={styles.loadingBar}>
        <div className={styles.loadingBar__progress}></div>
      </div>

      <div className={styles.glowText2}>Glow text 2</div>

      <div className={styles.spinner}>X</div>

      <div class={styles.circularProgress}>
        <div class={styles.progressValue}>75%</div>
      </div>
    </div>
  );
}
