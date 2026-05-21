import type { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./alert.module.scss";

export interface AlertProps {
  /** Small text to appear above the main title. */
  variant: "info" | "warning" | "error" | "success";

  /** Global alerts are darker variants of alerts that are used to convey a
   * globally important information that appears in the top area of the page. */
  global?: boolean;

  /** Optional title text. */
  title?: string;

  /** Main message text. */
  children: ReactNode;

  /** Optional button or link to display below the message. */
  suffix?: ReactNode;

  /** Show/hide the component.  If omitted, always visible.  This is to allow it
   * to be dynamically shown without causing a virtual DOM update. */
  visible?: boolean;
}

/** A box used to notify users of important information or changes on a page
 * needing their attention, without interrupting their task. */
export const Alert: FC<AlertProps> = ({
  visible,
  variant,
  global,
  title,
  children,
  suffix,
}) => {
  return (
    <div
      className={classNames({
        [styles["visually-hidden"]]: visible === false,
        [styles["uq-alert"]]: true,
        [styles["uq-alert--info"]]: variant === "info",
        [styles["uq-alert--warning"]]: variant === "warning",
        [styles["uq-alert--error"]]: variant === "error",
        [styles["uq-alert--success"]]: variant === "success",
        [styles["uq-alert--dark"]]: !!global,
        [styles["uq-alert--global"]]: !!global,
      })}
      role="alert"
    >
      <div className={styles["uq-alert__message"]}>
        {title && <h3 className={styles["uq-alert__title"]}>{title}</h3>}
        <p>{children}</p>
        {suffix}
      </div>
    </div>
  );
};
