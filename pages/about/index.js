import Link from "next/link";
import Head from "next/head";
export default function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <h1>About page!</h1>
      <h2>
        <Link href="/">Back to home.</Link>
      </h2>
    </div>
  );
}
