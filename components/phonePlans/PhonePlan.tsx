import styles from "./phonePlan.module.css";
import Link from "next/link";
import { PhonePlanProps } from "../../types/types";
import { Button } from "../button/Button";

const PhonePlan = ({ plan }: PhonePlanProps) => {
  return (
    <div className={`${styles.wrapper} ${styles[`plan${plan._id}`]}`}>
      <div>
        <h1 className={styles.title}>{plan.title}</h1>
        <div className={styles.primaryContent}>
          <div className={styles.dataLimit}>{`${plan.dataLimit}GB`}</div>
          <span className={styles.verticalLine}></span>
          <div className={styles.price}>
            {`$${plan.monthlyPrice}`}
            <span>/mth</span>
          </div>
        </div>
        <hr className={styles.line} />

        <div className={styles.description}>{plan.description}</div>
        <hr className={styles.line} />
      </div>
      <p className={styles.expiry}>
        Offer expires: <span>{plan.expiry}</span>
      </p>
      <hr className={styles.line} />
      <Link href={`/plans/${plan._id}`} className={styles.learnMoreLink}>
        <Button mode="3d" className={styles.linkButton}>
          Learn more
        </Button>
      </Link>
    </div>
  );
};

export default PhonePlan;
