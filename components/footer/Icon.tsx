import Image from "next/image";
import styles from "./icon.module.css";
import { HtmlHTMLAttributes } from "react";
interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  description: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, description, ...props }) => {
  return (
    <div className={styles.iconContainer} {...props}>
      <Image
        src={src}
        alt={alt}
        className={styles.iconImage}
        height={48}
        width={48}
      />
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Icon;
