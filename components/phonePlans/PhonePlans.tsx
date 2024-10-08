import PhonePlan from "./PhonePlan";
import styles from "./phonePlans.module.scss";
import { PhonePlansProps } from "../../types/types";
const PhonePlans = ({ plans }: PhonePlansProps) => {
  return (
    <div className={`${styles.wrapper}`} id={"phonePlans"}>
      {plans.map((plan) => (
        <PhonePlan key={`${plan._id}`} plan={plan} />
      ))}
    </div>
  );
};

export default PhonePlans;
