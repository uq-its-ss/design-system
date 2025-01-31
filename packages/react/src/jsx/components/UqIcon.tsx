import { FC } from "react";
import classNames from "classnames";

export enum UqIconVariant {
  light = "light",
  text = "text",
}

export interface UqIconProps {
  name: string;
  variant?: UqIconVariant;
}

export const UqIcon: FC<UqIconProps> = ({ name, variant }) => (
  <span
    className={classNames("uq-icon", `uq-icon--${name}`, {
      [`uq-icon--${variant}`]: variant,
    })}
  ></span>
);
