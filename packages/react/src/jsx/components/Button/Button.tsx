import type { FC } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import { Icon } from "../Icon/Icon";
import { type IconCode } from "@uqds/icon";

export interface ButtonProps {
  /** Button significance. */
  style?: "primary" | "secondary" | "tertiary";
  /** The size of the button. */
  size?: "default" | "tiny" | "small" | "large";
  /** Expand the button to full width. */
  expand?: boolean;
  /** Optional icon to show in the button. */
  icon?: IconCode;
  /** Button text. */
  label: string;
  /** True to show a spinner instead of the icon.  No effect if an icon is not
      specified. */
  spinner?: boolean;
  /** True to prevent the button from being clicked. */
  disabled?: boolean;
  /** Handler for when the user clicks on the button. */
  onClick: () => void;
}

/** A button the user can click on to perform an action. */
export const Button: FC<ButtonProps> = ({
  style = "primary",
  size = "default",
  expand = false,
  label,
  icon,
  spinner = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={classNames({
        [styles["uq-button"]]: true,
        [styles[`uq-button--${style}`]]: !!style,
        [styles[`uq-button--${size}`]]: !!size,
        [styles["uq-button--expand"]]: expand,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon &&
        (spinner ? (
          <span
            className={classNames({
              [styles["uq-loading-spinner"]]: true,
              [styles["uq-loading-spinner--small"]]: true,
              [styles["uq-loading-spinner--light"]]: [
                // Use a light spinner for these dark button styles.
                "",
                "primary",
              ].includes(style ?? ""),
            })}
          ></span>
        ) : (
          // Show the icon if present, if the spinner is not in use.
          <Icon name={icon} />
        ))}
      {label}
    </button>
  );
};
