import type { FC, PropsWithChildren } from "react";
import styles from "./uq-container.module.scss";

export interface UqContainerProps extends PropsWithChildren {}

export const UqContainer: FC<UqContainerProps> = ({ children }) => (
  <div className={styles["uq-container"]}>{children}</div>
);
