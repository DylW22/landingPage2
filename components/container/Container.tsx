import React from "react";
import styles from "./container.module.css";
import { ContainerProps } from "../../types/types";

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      {children}
    </div>
  );
};
