import type { FC, ReactNode } from "react";
import classNames from "classnames";
import css from "./styles.module.scss";

export interface AlertProps {
  /** Show/hide the alert.  If omitted, always visible.  This is to allow it
   * to be dynamically shown without causing a virtual DOM update. */
  visible?: boolean;

  /** Small text to appear above the main title. */
  variant: 'info' | 'warning' | 'error' | 'success';

  /** Global alerts are darker variants of alerts that are used to convey a
   * globally important information that appears in the top area of the page. */
  global?: boolean;

  /** Optional title text. */
  title?: string;

  /** Main message text. */
  children: ReactNode;

  /** Optional button or link to display below the message. */
  suffix?: ReactNode;
};

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
        [css["visually-hidden"]]: visible === false,
        [css["uq-alert"]]: true,
        [css["uq-alert--info"]]: variant === 'info',
        [css["uq-alert--warning"]]: variant === 'warning',
        [css["uq-alert--error"]]: variant === 'error',
        [css["uq-alert--success"]]: variant === 'success',
        [css["uq-alert--dark"]]: !!global,
        [css["uq-alert--global"]]: !!global,
      })}
      role="alert"
    >
      <div className={css["uq-alert__message"]}>
        {title && (
          <h3 className={css["uq-alert__title"]}>{title}</h3>
        )}
        <p>
          {children}
        </p>
        {suffix}
      </div>
    </div>
  );
};
