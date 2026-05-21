import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import { UqCardGridTarget } from "../../enum";
import styles from "./uq-card-grid.module.scss";

export interface UqCardGridProps extends PropsWithChildren {
  target?: UqCardGridTarget;
}

export const UqCardGrid: FC<UqCardGridProps> = ({ children, target }) => (
  <div
    className={clsx(styles["uq-card-grid"], {
      [styles[`uq-card-grid--target-${target}`]]: target,
    })}
  >
    {children}
  </div>
);
