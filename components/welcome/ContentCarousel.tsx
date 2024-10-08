import React, { useEffect, useState } from "react";
import styles from "./contentCarousel.module.css";
import Welcome from "./Welcome";
import CallToAction from "../callToAction/CallToAction";
import { LatestDeals } from "../promotions/LatestDeals";
import Circles from "../contentCarousel/SelectionCircles";
//import Image from "next/image";
//import mobilePhone from "./../../public/icons/mobile-phone.png";
// const TestDiv = () => {
//   return (
//     <div className={styles.testDiv}>
//       <div className={styles.content2}>
//         <div className={styles.leftContent}>
//           <h1>Welcome.</h1>
//           <h3>Make your life as sweet as our phones.</h3>
//           <p>
//             Your mobile-phone is as <em>important</em> to us as it is to you.
//           </p>
//         </div>
//         <div className={styles.rightContent}>
//           <div className={styles.imageWrapper}>
//             <Image
//               src={mobilePhone}
//               height={300}
//               width={300}
//               alt="Mobile phone"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const ContentCarousel: React.FC = () => {
  const componentsArray: JSX.Element[] = [
    <Welcome key="1" />,
    <CallToAction key="2" />,
    <LatestDeals key="3" />,
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleCircleClick = (index: number) => {
    if (index !== currentIndex) {
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setCurrentIndex(index);
      }, 500);
    }
  };

  //Cycle through every five seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % componentsArray.length
        );
        setIsFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [componentsArray.length]);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.content} ${
          isFading ? styles.hidden : styles.visible
        }`}
      >
        {componentsArray[currentIndex]}
      </div>

      <Circles
        currentIndex={currentIndex}
        handleCircleClick={handleCircleClick}
        componentsArray={componentsArray}
      />
    </div>
  );
};

export default ContentCarousel;
