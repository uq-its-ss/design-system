import type { FC, ReactNode } from "react";
import classNames from "classnames";
import { UqCardVariant } from "../../enum";

export interface UqCardProps {
  title: ReactNode;
  variant: UqCardVariant;
  image?: ReactNode;
  icon?: ReactNode;
  description?: ReactNode;
}

export const UqCard: FC<UqCardProps> = ({
  image,
  icon,
  title,
  description,
  variant,
}) => (
  <div
    className={classNames("uq-card", `uq-card--${variant}`)}
    data-gtm-category="Card"
  >
    {image && <div className="uq-card__image">{image}</div>}
    <div className="uq-card__content">
      {icon && <div className="uq-card__icon">{icon}</div>}
      <h3 className="uq-card__title">{title}</h3>
      {description && <div className="uq-card__description">{description}</div>}
    </div>
  </div>
);
