import type { FC } from "react";
import styles from "./uq-icon.module.scss";
import { UqIconVariant } from "../../enum";

export interface UqIconProps {
  name: string;
  variant?: UqIconVariant;
}

export const UqIcon: FC<UqIconProps> = ({ name, variant }) => (
  <span
    className={`${styles["uq-icon"]} ${styles[`uq-icon--${name}`]} ${variant ? styles[`uq-icon--${variant}`] : ""}`}
  ></span>
);
