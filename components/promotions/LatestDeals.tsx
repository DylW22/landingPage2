import Link from "next/link";
import { Container } from "../container/Container";
import styles from "./latestDeals.module.css";
export const LatestDeals: React.FC = () => {
  return (
    <Link href={"#phonePlans"} className={styles.latestDealsContainer}>
      <Container className={styles.content}>
        <div>See our Sweet phone plans.</div>
      </Container>
    </Link>
  );
};
