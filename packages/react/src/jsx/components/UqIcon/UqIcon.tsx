import type { FC } from "react";
import { UqIconVariant } from "../../enum";
import clsx from "clsx";
import styles from "./uq-icon.module.scss";

export interface UqIconProps {
  name: string;
  variant?: UqIconVariant;
}

export const UqIcon: FC<UqIconProps> = ({ name, variant }) => (
  <span
    className={clsx(styles["uq-icon"], styles[`uq-icon--${name}`], {
      [styles[`uq-icon--${variant}`]]: variant,
    })}
  ></span>
);
