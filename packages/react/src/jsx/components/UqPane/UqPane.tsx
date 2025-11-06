import type { FC, ReactNode } from "react";
import clsx from "clsx";
import { UqPaneVariant } from "../../enum";
import styles from "./uq-pane.module.scss";

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
  <div className={clsx(styles["uq-pane"], styles[`uq-pane--${variant}`])}>
    {image && <div className={styles["uq-pane__image"]}>{image}</div>}
    {video && <div className={styles["uq-pane__video"]}>{video}</div>}
    <div className="uq-pane__content">
      {icon && <div className={styles["uq-pane__icon"]}>{icon}</div>}
      <h3 className={styles["uq-pane__title"]}>{title}</h3>
      {description && (
        <div className={styles["uq-pane__description"]}>{description}</div>
      )}
      {links && <div className={styles["uq-pane__actions"]}>{links}</div>}
    </div>
  </div>
);
