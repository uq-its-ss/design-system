import type { FC } from "react";
import classNames from "classnames";
import css from "../index.module.scss";
import { type IconCode } from "@uqds/icon";

export interface IconProps {
  /** Name of the image to show, from the predefined list.  See the HTML
   * Storybook for the Icon component for a graphical list of options. */
  name: IconCode;

  /** Small text to appear above the main title. */
  variant?: "default" | "light" | "text";
}

/** A box used to notify users of important information or changes on a page
 * needing their attention, without interrupting their task. */
export const Icon: FC<IconProps> = ({ name, variant }) => {
  return (
    <span
      className={classNames({
        [css["uq-icon"]]: true,
        [css[`uq-icon--${name}`]]: true,
        [css[`uq-icon--light`]]: variant === "light",
        [css[`uq-icon--text`]]: variant === "text",
      })}
    ></span>
  );
};
