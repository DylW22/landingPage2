import styles from "./testimonials.module.css";
import Testimonial from "./Testimonial";
import { TestimonialsProps } from "../../types/types";

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className={styles.wrapper}>
      {testimonials.map((testimonial) => (
        <Testimonial key={`${testimonial._id}`} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
