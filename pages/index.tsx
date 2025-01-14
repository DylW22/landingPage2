import Head from "next/head";
import styles from "../styles/Home.module.css";
import Testimonials from "../components/testimonials/Testimonials";
import PhonePlans from "../components/phonePlans/PhonePlans";
import ContentCarousel from "../components/welcome/ContentCarousel";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PhonePlanType, Testimonial } from "../types/types";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps<{
  plans: PhonePlanType[];
  testimonials: Testimonial[];
}> = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/plans`);
    if (!res.ok) {
      return {
        notFound: true,
      };
    }
    const plans: PhonePlanType[] = await res.json();

    const testimonialsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/testimonials`
    );
    const testimonials: Testimonial[] = await testimonialsRes.json();
    return {
      props: {
        plans,
        testimonials,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function Home({
  plans,
  testimonials,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (!router.isFallback && !plans) {
    return <div>Index.tsx error</div>;
  }
  return (
    <div className={styles.content}>
      <Head>
        <title>SugaPhone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentCarousel />

      {plans.length > 0 && <PhonePlans plans={plans} />}
      {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
    </div>
  );
}
