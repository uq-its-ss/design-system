import type { FC, MouseEventHandler } from "react";
import styles from "./uq-pagination.module.scss";
import { UqIcon } from "../UqIcon/UqIcon.tsx";
import { UqPaginationItemType } from "../../enum";

export interface UqPaginationItemProps {
  As?: "button" | "a";
  type?: UqPaginationItemType;
  number?: number;
  current?: boolean;
  href?: string;
  value?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const UqPaginationItem: FC<UqPaginationItemProps> = ({
  As = "button",
  type,
  number,
  current = false,
  href,
  value,
  onClick,
}) => {
  return (
    <li className={styles["uq-pagination__list-item"]}>
      <As
        className={`${styles["uq-pagination__item"]} ${type ? styles[`uq-pagination__${type}`] : ""} ${current ? styles["uq-pagination__current"] : ""}`}
        aria-current={current && "page"}
        // @ts-expect-error Dynamic elements expect different attributes (a and button).
        onClick={onClick}
        href={href}
        value={value}
      >
        <span className="visually-hidden">
          {!type && "Page"}
          {type === UqPaginationItemType.Previous && "Previous page"}
          {type === UqPaginationItemType.Next && "Previous page"}
          {type === UqPaginationItemType.Ellipsis && `Skip to page ${number}`}
        </span>
        {!type && `${number}`}
        {type === UqPaginationItemType.Previous && (
          <UqIcon name={"standard--chevron-left"} />
        )}
        {type === UqPaginationItemType.Next && (
          <UqIcon name={"standard--chevron-right"} />
        )}
        {type === UqPaginationItemType.Ellipsis && "…"}
      </As>
    </li>
  );
};
