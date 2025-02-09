import type { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import { UqCardGridTarget } from "../../enum";

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
