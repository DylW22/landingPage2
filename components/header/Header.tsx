import styles from "./header.module.css";
import brandLogo from "./../../public/icons/brandLogo2-no-bg.png";
import hamburger from "./../../public/icons/burger-menu.svg";
import Link from "next/link";
import Image from "next/image";
import BrandName from "../brandName/BrandName";
import { HeaderProps } from "../../types/types";

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.iconContainer}>
        <Image
          src={brandLogo}
          alt="Brand Logo"
          height={100}
          width={100}
          className={styles.icon}
          draggable={false}
        />
        <BrandName />
      </Link>
      <div>
        <Image
          onClick={toggleMenu}
          src={hamburger}
          alt="Menu icon"
          height={100}
          width={100}
          draggable={false}
          className={styles.burger}
        />
      </div>
    </div>
  );
};

export default Header;
