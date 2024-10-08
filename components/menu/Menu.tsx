import Link from "next/link";
import styles from "./menu2.module.css";
import { usePathname } from "next/navigation";
import { NavLinkType, MenuProps } from "../../types/types";
import navLinks from "../../public/data/navLinks.json";

const typedNavLinks: NavLinkType[] = navLinks;

const Menu: React.FC<MenuProps> = ({ toggleMenu }) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <ul>
          {typedNavLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={isActive(navLink.path) ? styles.active : styles.test}
            >
              <Link onClick={toggleMenu} href={navLink.path}>
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
