import { FC, MouseEventHandler } from "react";
import classNames from "classnames";
import { UqIcon } from "../UqIcon/UqIcon.tsx";

export enum UqPaginationItemType {
  Previous = "previous",
  Next = "next",
  Ellipsis = "ellipsis",
}

export interface UqPaginationItemProps {
  As?: "button" | "a";
  type?: UqPaginationItemType;
  number?: number;
  current?: boolean;
  href?: string;
  value: string;
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
}) => (
  <li>
    <As
      className={classNames("uq-pagination__item", {
        [`uq-pagination__${type}`]: type,
        "uq-pagination__current": current,
      })}
      aria-current={current && "page"}
      onClick={onClick}
      href={href}
      value={value}
    >
      <span className="visually-hidden">
        {!type && "Page"}
        {type === UqPaginationItemType.Previous && "Previous page"}
        {type === UqPaginationItemType.Next && "Previous page"}
        {type === UqPaginationItemType.Ellipsis && `Page ${number}`}
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
