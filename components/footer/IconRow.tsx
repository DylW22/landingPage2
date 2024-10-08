import Icon from "./Icon";
import Link from "next/link";
import IconData from "./../../public/data/iconData.json";

import styles from "./iconRow.module.css";
import { IconType } from "../../types/types";

const TypedIconData: IconType[] = IconData;
const IconRow = () => {
  return (
    <div className={styles.gridContainer}>
      {TypedIconData.map((iconData) => (
        <Link href={iconData.targetUrl} key={iconData.id}>
          <Icon
            src={iconData.imageSrc}
            alt={iconData.alt}
            description={iconData.description}
            className={`${styles.gridItem}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default IconRow;
