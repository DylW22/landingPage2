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
        <div>
          process.env.NODE_ENV:
          {JSON.stringify(process.env.NEXT_PUBLIC_NODE_ENV)}
        </div>
        <div>
          process.env.NODE_ENV: {JSON.stringify(process.env.MONGODB_URI)}
        </div>
        <div>
          NEXT_PUBLIC_API_URL:
          {JSON.stringify(process.env.NEXT_PUBLIC_API_URL)}
        </div>
      </div>
    </div>
  );
}
