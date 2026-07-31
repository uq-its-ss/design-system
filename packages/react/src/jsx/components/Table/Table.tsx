import type { FC, ReactNode } from "react";
import styles from "./table.module.scss";

export interface TableProps {
  /** Normal table content - thead, tr, td, td, etc. */
  children: ReactNode;
}

/** A normal HTML table with UQDS styles applied. */
export const Table: FC<TableProps> = ({ children }) => (
  <div className={styles["uq-table__wrapper"]}>
    <table className={styles["uq-table"]}>{children}</table>
  </div>
);
