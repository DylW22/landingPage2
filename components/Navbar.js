"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
];

const Navbar = ({ onClick }) => {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navbarButton}>
          <button onClick={onClick}>X</button>
        </div>
        <ul>
          {NavLinks.map((link) => {
            return (
              <li key={link.id} className={styles.navbarItem}>
                <Link
                  href={link.path}
                  className={isActive(link.path) ? styles.active : "inactive"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
