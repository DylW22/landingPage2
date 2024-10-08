import styles from "./_app.module.scss";
import { useState } from "react";
import "../styles/global.css";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <Header toggleMenu={toggleMenu} />
      <div className={styles.particleContainer}>
        {Array.from({ length: 20 }, (_, index) => (
          <span key={index} className={styles.particle}></span>
        ))}
      </div>
      <div
        className={`${styles.menu} ${isOpen ? styles.fadein : styles.hidden}`}
      >
        <Menu toggleMenu={toggleMenu} />
      </div>

      <div
        className={`${styles.content} ${
          isOpen ? styles.hidden : styles.visible
        }`}
      >
        <Component {...pageProps} />
      </div>
      <ScrollToTop />
      {!isOpen && <Footer />}
    </div>
  );
};

export default MyApp;
