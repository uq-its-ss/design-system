import type { FC, ReactNode } from "react";
import { useCallback } from "react";
import classNames from "classnames";
import css from "./styles.module.scss";

export interface HeroProps {
  /** Small text to appear above the main title. */
  eyebrow?: ReactNode;
  /** Main title text. */
  title: ReactNode;

  /** Optional link to go back to the previous page. */
  back?: ReactNode;
  /** URL for back link intead of `backOnClick`. */
  backHref?: string;
  /** Handler for back link instead of `backHref`. */
  backOnClick?: () => void;
}

/** A button the user can click on to perform an action. */
export const Hero: FC<HeroProps> = ({
  eyebrow,
  title,
  back,
  backHref,
  backOnClick,
}) => {
  const wrapBackOnClick = useCallback((ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (backOnClick) {
      ev.preventDefault();
      backOnClick();
    }
  }, [
    backOnClick,
  ]);

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

          {back && (
            <div className={css["uq-hero-basic__back"]}>
              <a href={backHref ?? "#"} onClick={wrapBackOnClick}>
                <span className={classNames({
                  [css["uq-icon"]]: true,
                  [css["uq-icon--common--chevron-left"]]: true,
                  [css["uq-icon--light"]]: true,
                })}></span>
                <span className={css["uq-hero-basic__back-text"]}>{back}</span>
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
