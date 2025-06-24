import type { FC } from "react";
import classNames from "classnames";
import css from "./styles.module.scss";

export interface LoadingSpinnerProps {
  /** Default is dark. */
  variant?: "light" | "dark";

  /** Size of animation. */
  size?: "small" | "default";
}

/** A button the user can click on to perform an action. */
export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  variant = "dark",
  size = "default",
}) => {
  return (
    <div
      className={classNames({
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
