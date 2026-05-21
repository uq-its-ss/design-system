import type { FC } from "react";
import classNames from "classnames";
import styles from "./loading-spinner.module.scss";

export interface LoadingSpinnerProps {
  /** Default is dark. */
  variant?: "light" | "dark";

  /** Size of animation. */
  size?: "small" | "default";

  /** Show/hide the component.  If omitted, always visible.  This is to allow it
   * to be dynamically shown without causing a virtual DOM update. */
  visible?: boolean;
}

/** A button the user can click on to perform an action. */
export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  variant = "dark",
  size = "default",
  visible = true,
}) => {
  return (
    <div
      className={classNames({
        [styles["visually-hidden"]]: visible === false,
        [styles["uq-loading-spinner"]]: true,
        [styles["uq-loading-spinner--light"]]: variant === "light",
        [styles["uq-loading-spinner--small"]]: size === "small",
      })}
      role="alert"
      aria-live="assertive"
    >
      <span>Loading...</span>
    </div>
  );
};
