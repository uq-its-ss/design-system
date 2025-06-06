import type { FC, ReactNode } from "react";
import classNames from "classnames";
import { UqStoryCardVariant } from "../../enum";

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
    className={classNames("uq-story-card", `uq-story-card--${variant}`)}
    data-gtm-category="StoryCard"
  >
    {image && <div className="uq-story-card__image">{image}</div>}
    <div className="uq-story-card__content">
      {topLabel && <div className="uq-story-card__top-label">{topLabel}</div>}
      <h3 className="uq-story-card__title">{title}</h3>
      {description && (
        <div className="uq-story-card__description">{description}</div>
      )}
      {bottomLabel && (
        <div className="uq-story-card__bottom-label">{bottomLabel}</div>
      )}
    </div>
  </div>
);
