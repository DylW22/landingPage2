import styles from "./selectionCircles.module.css";

interface CirclesProps {
  currentIndex: number;
  componentsArray: JSX.Element[];
  handleCircleClick: (index: number) => void;
}

const Circles: React.FC<CirclesProps> = ({
  currentIndex,
  componentsArray,
  handleCircleClick,
}) => {
  return (
    <div className={styles.circles}>
      {componentsArray.map((_, index) => (
        <div
          key={index}
          className={`${styles.circle} ${
            currentIndex === index ? styles.active : ""
          }`}
          onClick={() => handleCircleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Circles;
