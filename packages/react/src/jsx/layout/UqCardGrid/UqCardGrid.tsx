import type { FC, PropsWithChildren } from "react";
import styles from "./uq-card-grid.module.scss";
import { UqCardGridTarget } from "../../enum";

export interface UqCardGridProps extends PropsWithChildren {
  target?: UqCardGridTarget;
}

export const UqCardGrid: FC<UqCardGridProps> = ({ children, target }) => (
  <div
    className={`${styles["uq-card-grid"]} ${target ? styles[`uq-card-grid--target-${target}`] : ""}`}
  >
    {children}
  </div>
);
