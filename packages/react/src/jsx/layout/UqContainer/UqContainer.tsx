import type { FC, PropsWithChildren } from "react";

export type UqContainerProps = PropsWithChildren;

export const UqContainer: FC<UqContainerProps> = ({ children }) => (
  <div className="uq-container">{children}</div>
);
