import styles from "./header.module.css";
const Header = ({ toggleMenu }) => {
  return (
    <div className={styles.header}>
      <div>Icon</div>
      <div>
        <button onClick={toggleMenu}>X</button>
      </div>
    </div>
  );
};

export default Header;
