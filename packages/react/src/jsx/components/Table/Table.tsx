import type { FC, ReactNode } from "react";
import css from "../index.module.scss";

export interface TableProps {
  /** Normal table content - thead, tr, td, td, etc. */
  children: ReactNode;
};

/** A normal HTML table with UQDS styles applied. */
export const Table: FC<TableProps> = ({
  children,
}) => (
  <div className={css["uq-table__wrapper"]}>
    <table className={css["uq-table"]}>
      {children}
    </table>
  </div>
);
