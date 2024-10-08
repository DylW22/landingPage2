import styles from "./testimonial.module.css";
import { TestimonialProps } from "../../types/types";
import Image from "next/image";

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userDetails}>
        <h2 className={styles.userName}>{testimonial.name}</h2>
        <Image
          src={testimonial.imageUrl}
          alt="User profile"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.description}>{testimonial.description}</div>
    </div>
  );
};

export default Testimonial;

// export const getStaticProps: GetStaticProps<> = () => {};
