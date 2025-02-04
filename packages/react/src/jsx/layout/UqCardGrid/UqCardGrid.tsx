import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

export enum UqCardGridTarget {
  x1 = "1x",
  x2 = "2x",
  x3 = "3x",
  x4 = "4x",
}

export interface UqCardGridProps extends PropsWithChildren {
  target?: UqCardGridTarget;
}

export const UqCardGrid: FC<UqCardGridProps> = ({ children, target }) => (
  <div
    className={classNames("uq-card-grid", {
      [`uq-card-grid--target-${target}`]: target,
    })}
  >
    {children}
  </div>
);
