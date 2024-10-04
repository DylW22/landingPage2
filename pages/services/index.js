import Head from "next/head";
import Link from "next/link";
export default function Services() {
  return (
    <div>
      <Head>
        <title>Services page</title>
      </Head>
      <h1>Services page!</h1>
      <h2>
        <Link href="/">Back to home.</Link>
      </h2>
    </div>
  );
}
