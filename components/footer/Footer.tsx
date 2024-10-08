import styles from "./footer.module.css";
import IconRow from "./IconRow";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTitle}>Get in touch.</div>
        <p className={styles.footerDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          gravida sollicitudin justo, consectetur tempus dui scelerisque vel.
          Donec quis lobortis enim, dapibus pellentesque tortor.
        </p>
        <Link href={"/contact"} className={styles.footerContact}>
          Contact us
        </Link>
      </div>
      <div className={styles.outerIconWrapper}>
        <IconRow />
      </div>
    </div>
  );
};

export default Footer;
