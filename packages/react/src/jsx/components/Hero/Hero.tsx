import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import classNames from "classnames";
import css from "../index.module.scss";

export interface HeroProps {
  /** Small text to appear above the main title. */
  eyebrow?: ReactNode;

  /** Main title text. */
  title: ReactNode;

  /** Optional link to go back to the previous page. */
  backText?: ReactNode;

  /** If backText is specified, the component to render it can be changed from
   * the default HTML `<a>` to something else, such as React Router's `<Link>`.
   */
  backComponent?: any;

  /** Props to pass to the backComponent, such as `href`, `onClick` or for
   * React Router, `to`. */
  backComponentProps?: ComponentPropsWithoutRef<
    HeroProps["backComponent"] extends undefined
      ? "a"
      : HeroProps["backComponent"]
  >;
}

/** A button the user can click on to perform an action. */
export const Hero: FC<HeroProps> = ({
  eyebrow,
  title,
  backText,
  backComponent: BackComponent = "a", // Default to an HTML <a> element
  backComponentProps = {},
}) => {
  return (
    <div className={css["uq-hero-basic"]}>
      <div className={css["uq-container"]}>
        <div className={css["uq-hero-basic__content"]}>
          <h1 className={css["uq-hero-basic__title"]}>
            {eyebrow && (
              <span className={css["uq-hero-basic__eyebrow"]}>{eyebrow}</span>
            )}
            {title}
          </h1>

          {backText && (
            <div className={css["uq-hero-basic__back"]}>
              <BackComponent {...backComponentProps}>
                <span
                  className={classNames({
                    [css["uq-icon"]]: true,
                    [css["uq-icon--common--chevron-left"]]: true,
                    [css["uq-icon--light"]]: true,
                  })}
                ></span>
                <span className={css["uq-hero-basic__back-text"]}>
                  {backText}
                </span>
              </BackComponent>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
