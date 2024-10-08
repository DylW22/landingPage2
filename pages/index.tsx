import Head from "next/head";
import styles from "../styles/Home.module.css";
import Testimonials from "../components/testimonials/Testimonials";
import PhonePlans from "../components/phonePlans/PhonePlans";
import ContentCarousel from "../components/welcome/ContentCarousel";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PhonePlanType, Testimonial } from "../types/types";

export const getStaticProps: GetStaticProps<{
  plans: PhonePlanType[];
  testimonials: Testimonial[];
}> = async () => {
  //Fetch PhonePlans

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
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function Home({
  plans,
  testimonials,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
