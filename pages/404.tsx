import Head from "next/head";
import Link from "next/link";
import styles from "./../styles/404.module.css";
export default function MyComponent() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Oops!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Oops! An error occurred.</div>
      <div>
        {" "}
        <h2>
          <Link href="/">Back to home.</Link>
        </h2>
      </div>
    </div>
  );
}
