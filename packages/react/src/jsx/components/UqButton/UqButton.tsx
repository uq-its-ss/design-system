import type { FC, ReactNode } from "react";
import classNames from "classnames";
import { UqButtonVariant } from "../../enum";

export interface UqButtonProps {
  variant: UqButtonVariant;
  label?: ReactNode;
  size?: ReactNode;
  expand?: ReactNode;
  icon?: ReactNode;
}

export const UqButton: FC<UqButtonProps> = ({
    variant,
    style, 
    label, 
    size, 
    expand, 
    icon,
}) => (
    <button className={classNames("uq-button", `${style}`, `${size}`, `${uq-button--expand}`)}>
    {icon && <span className="uq-icon uq-icon--{icon}"></span>}
    {label}
    </button>
);

export const UqButton: FC<UqButtonProps> = ({
    style,
    label, 
    size, 
    expand, 
    icon,
}) => (
  <div className={classNames("uq-pane", `uq-pane--${variant}`)}>
    {image && <div className="uq-pane__image">{image}</div>}
    {video && <div className="uq-pane__video">{video}</div>}
    <div className="uq-pane__content">
      {icon && <div className="uq-pane__icon">{icon}</div>}
      <h3 className="uq-pane__title">{title}</h3>
      {description && <div className="uq-pane__description">{description}</div>}
      {links && <div className="uq-pane__actions">{links}</div>}
    </div>
  </div>
);
