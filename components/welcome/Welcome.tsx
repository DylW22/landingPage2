import styles from "./welcome.module.css";
import mobilePhone from "./../../public/icons/mobile-phone.png";
import Image from "next/image";
function Welcome() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h1>Welcome.</h1>
          <p>Make your life as sweet as our phones.</p>
          <p>
            Your mobile-phone is as <em>important</em> to us as it is to you.
          </p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.imageWrapper}>
            <Image
              src={mobilePhone}
              // objectFit="responsive"
              alt="Mobile phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
