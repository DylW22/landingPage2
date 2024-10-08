import Link from "next/link";
import Head from "next/head";
import styles from "./../../styles/about.module.css";
export default function About() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>About page</title>
      </Head>
      <div className={styles.content}>
        <h1>About page!</h1>
        <p>More content and such</p>
      </div>
      <h2>
        <Link href="/">Back to home.</Link>
      </h2>
    </div>
  );
}
