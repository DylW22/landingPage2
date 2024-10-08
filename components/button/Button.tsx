import React from "react";
import styles from "./button.module.css";
import { ButtonProps } from "../../types/types";

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  mode = "normal",
  ...props
}) => {
  const is3D = mode === "3d";
  return (
    <button
      className={`${styles.wrapper} ${is3D && styles.threeD} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
