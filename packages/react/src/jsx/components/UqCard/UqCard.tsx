import type { FC, ReactNode } from "react";
import clsx from "clsx";
import { UqCardVariant } from "../../enum";
import styles from "./uq-card.module.scss";

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
    className={clsx(styles["uq-card"], styles[`uq-card--${variant}`])}
    data-gtm-category="Card"
  >
    {image && <div className={styles["uq-card__image"]}>{image}</div>}
    <div className={styles["uq-card__content"]}>
      {icon && <div className={styles["uq-card__icon"]}>{icon}</div>}
      <h3 className={styles["uq-card__title"]}>{title}</h3>
      {description && (
        <div className={styles["uq-card__description"]}>{description}</div>
      )}
    </div>
  </div>
);
