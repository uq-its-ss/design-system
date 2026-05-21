import type { FC, ReactNode } from "react";
import styles from "./uq-pane.module.scss";
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
  <div className={`${styles["uq-pane"]} ${styles[`uq-pane--${variant}`]}`}>
    {image && <div className={styles["uq-pane__image"]}>{image}</div>}
    {video && <div className={styles["uq-pane__video"]}>{video}</div>}
    <div className={styles["uq-pane__content"]}>
      {icon && <div className={styles["uq-pane__icon"]}>{icon}</div>}
      <h3 className={styles["uq-pane__title"]}>{title}</h3>
      {description && <div className={styles["uq-pane__description"]}>{description}</div>}
      {links && <div className={styles["uq-pane__actions"]}>{links}</div>}
    </div>
  </div>
);
