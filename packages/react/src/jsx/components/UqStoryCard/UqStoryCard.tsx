import type { FC, ReactNode } from "react";
import clsx from "clsx";
import { UqStoryCardVariant } from "../../enum";
import styles from "./uq-story-card.module.scss";

export interface UqStoryCardProps {
  title: ReactNode;
  variant: UqStoryCardVariant;
  image?: ReactNode;
  description?: ReactNode;
  topLabel: string;
  bottomLabel: string;
}

export const UqStoryCard: FC<UqStoryCardProps> = ({
  image,
  title,
  description,
  variant,
  topLabel,
  bottomLabel,
}) => (
  <div
    className={clsx(
      styles["uq-story-card"],
      styles[`uq-story-card--${variant}`],
    )}
    data-gtm-category="StoryCard"
  >
    {image && <div className={styles["uq-story-card__image"]}>{image}</div>}
    <div className={styles["uq-story-card__content"]}>
      {topLabel && (
        <div className={styles["uq-story-card__top-label"]}>{topLabel}</div>
      )}
      <h3 className={styles["uq-story-card__title"]}>{title}</h3>
      {description && (
        <div className={styles["uq-story-card__description"]}>
          {description}
        </div>
      )}
      {bottomLabel && (
        <div className={styles["uq-story-card__bottom-label"]}>
          {bottomLabel}
        </div>
      )}
    </div>
  </div>
);
