import type { FC } from "react";
import classNames from "classnames";
import css from "../index.module.scss";

export interface LoadingSpinnerProps {
  /** Default is dark. */
  variant?: "light" | "dark";

  /** Size of animation. */
  size?: "small" | "default";

  /** Show/hide the alert.  If omitted, always visible.  This is to allow it
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
        [css["visually-hidden"]]: visible === false,
        [css["uq-loading-spinner"]]: true,
        [css["uq-loading-spinner--light"]]: variant === "light",
        [css["uq-loading-spinner--small"]]: size === "small",
      })}
      role="alert"
      aria-live="assertive"
    >
      <span>Loading...</span>
    </div>
  );
};
