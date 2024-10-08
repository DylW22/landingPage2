import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "./../../styles/plans.module.css";
import { PhonePlanType } from "../../types/types";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
export const getStaticProps: GetStaticProps<{
  plans: PhonePlanType[];
}> = async () => {
  try {
    const res = await fetch(`/${process.env.NEXT_PUBLIC_API_URL}/api/plans`);

    if (!res.ok) {
      return {
        notFound: true,
      };
    }
    const plans: PhonePlanType[] = await res.json();

    return {
      props: {
        plans,
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

const PhonePlans = ({
  plans,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (!router.isFallback && !plans) {
    return <div>Plans index error</div>;
  }
  return (
    <div className={styles.plansContainer}>
      <h1>Phone plans</h1>

      <ul className={styles.plansGrid}>
        {plans.map((plan) => (
          <li key={`${plan._id}`}>{plan.monthlyPrice}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhonePlans;
