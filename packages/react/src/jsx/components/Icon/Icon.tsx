import type { FC } from "react";
import classNames from "classnames";
import styles from "./icon.module.scss";
import { type IconCode } from "@uqds/icon";

export interface IconProps {
  /** Name of the image to show, from the predefined list.  See the HTML
   * Storybook for the Icon component for a graphical list of options. */
  name: IconCode;

  /** Visual style variant for the icon. */
  variant?: "default" | "light" | "text";
}

/** Displays a predefined icon using the selected visual variant. */
export const Icon: FC<IconProps> = ({ name, variant }) => {
  return (
    <span
      className={classNames({
        [styles["uq-icon"]]: true,
        [styles[`uq-icon--${name}`]]: true,
        [styles[`uq-icon--light`]]: variant === "light",
        [styles[`uq-icon--text`]]: variant === "text",
      })}
    ></span>
  );
};
