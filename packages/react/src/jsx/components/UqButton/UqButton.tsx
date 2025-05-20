import type { FC, ReactNode } from "react";
import classNames from "classnames";
import { UqButtonStyle, UqButtonSize } from "../../enum";

export interface UqButtonProps {
  style: UqButtonStyle;
  size: UqButtonSize;
  expand: boolean;
  label: string;
  icon?: ReactNode;
}

export const UqButton: FC<UqButtonProps> = ({
  style,
  size,
  expand,
  label,
  icon,
}) => (
  <button
    className={classNames("uq-button", `${style}`, `${size}`, {
      "uq-button--expand": expand,
    })}
  >
    {icon && <span className={`uq-icon uq-icon--${icon}`}></span>}
    {label}
  </button>
);
