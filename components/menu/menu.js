import Link from "next/link";
import styles from "./menu.module.css";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    id: 0,
    path: "/about",
    title: "ABOUT",
  },
  { id: 1, path: "/services", title: "SERVICES" },
  { id: 2, path: "/contact", title: "CONTACT" },
  { id: 3, path: "/career", title: "CAREER" },
  { id: 4, path: "/posts", title: "POSTS" },
];

const Menu = ({ toggleMenu }) => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <ul>
          {NavLinks.map((navLink) => (
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
