import styles from "./styles.module.scss";
import { MainPropType } from "@/shared/types";
import React from "react";

function Button({
  children,
  style,
  onClick,
  disabled,
}: MainPropType & { onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      className={styles.button}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;