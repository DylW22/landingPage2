import styles from "./_app.module.css";
import { useState } from "react";
import "../styles/global.css";
import Header from "../components/header/Header";
import Menu from "../components/menu/menu";
const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <Header toggleMenu={toggleMenu} />

      <div
        className={`${styles.content} ${
          isOpen ? styles.fadein : styles.hidden
        }`}
      >
        <Menu toggleMenu={toggleMenu} />
      </div>

      <div className={`${isOpen ? styles.hidden : styles.visible}`}>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
