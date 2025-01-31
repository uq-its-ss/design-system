import { FC, PropsWithChildren } from "react";

export interface UqContainerProps extends PropsWithChildren {}

export const UqContainer: FC<UqContainerProps> = ({ children }) => (
  <div className="uq-container">{children}</div>
);
