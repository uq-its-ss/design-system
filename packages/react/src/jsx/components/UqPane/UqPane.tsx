import type { FC, ReactNode } from "react";
import classNames from "classnames";
import { UqPaneVariant } from "../../enum";

export interface UqPaneProps {
  title: string;
  variant: UqPaneVariant;
  image?: ReactNode;
  icon?: ReactNode;
  video?: ReactNode;
  description?: ReactNode;
  links?: ReactNode;
}

export const UqPane: FC<UqPaneProps> = ({
  image,
  icon,
  title,
  description,
  variant,
  links,
  video,
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
