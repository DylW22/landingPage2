import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from "./plans.module.css";
import { PhonePlanType } from "../../types/types";
export const getStaticProps: GetStaticProps<{
  plans: PhonePlanType[];
}> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/plans`);

  const plans: PhonePlanType[] = await res.json();

  return {
    props: {
      plans,
    },
    revalidate: 60,
  };
};

const PhonePlans = ({
  plans,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
