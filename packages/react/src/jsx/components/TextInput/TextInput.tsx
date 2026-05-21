import { type FC, useId } from "react";
import classNames from "classnames";
import styles from "./text-input.module.scss";

export interface TextInputProps {
  /** Type of control. */
  type: "text" | "email" | "password" | "search";

  /** Very brief description of the text input's purpose. */
  label?: string;

  /** Location of the label. */
  labelPlacement?: "top" | "inline";

  /** Optional feedback note about the control, such as an error message. */
  feedback?: string;

  /** How to style the feedback message. */
  feedbackState?: "hidden" | "error" | "success";

  /** Optional text appearing in the box, removed as the user types. */
  placeholder?: string;

  /** Optional, true if the field is mandatory.  Requires `label` also.*/
  required?: boolean;

  /** Expand the button to full width. */
  expand?: boolean;

  /** True to suspend text entry, while leaving the text unchanged. */
  disabled?: boolean;

  /** Optional name for submitting forms. */
  name?: string;

  /** Handler for when the user presses Enter, clicks 'Search', etc. */
  onSubmit?: () => void;

  /** Handler for when the user clears the search, by clicking the X or by
   * pressing Escape.  It is expected that the caller at least clears the text
   * field when this happens (by setting the value to a blank string), but
   * clearing any existing search results may be desirable as well. */
  onClear?: () => void;

  /** React controlled element: handler for updating text as the user types. */
  onChange?: (text: string) => void;

  /** Value to display in the text input, for React controlled elements. */
  value?: string;
}

/** A single-line text field for collecting short text strings from a user. */
export const TextInput: FC<TextInputProps> = ({
  type,
  label,
  labelPlacement = "inline",
  feedback,
  feedbackState = "hidden",
  placeholder,
  required = false,
  expand = false,
  disabled = false,
  name,
  onSubmit,
  onClear,
  onChange,
  value,
}) => {
  const id = useId();

  return (
    <div className="uq-input-container">
      <div
        className={classNames({
          [styles["uq-input-withlabel"]]: true,
          [styles["uq-input-withlabel--inline"]]: labelPlacement === "inline",
          [styles["uq-search-input"]]: type === "search",
          [styles["uq-search-input--expand"]]: type === "search" && expand,
        })}
      >
        {label && (
          <label
            htmlFor={id}
            className={classNames({
              [styles["uq-label"]]: true,
              [styles["uq-label--inline"]]: labelPlacement === "inline",
            })}
          >
            <span className={styles["uq-label__text"]}>{label}</span>
            {required && (
              <span className={styles["uq-label__required"]} title="Required">
                {" "}
                *
              </span>
            )}
          </label>
        )}
        <input
          type={type}
          id={id}
          name={name}
          className={classNames({
            [styles["uq-input"]]: true,
            [styles["uq-input--large"]]: expand,
            [styles["uq-input--success"]]: feedbackState === "success",
            [styles["uq-input--error"]]: feedbackState === "error",
          })}
          aria-describedby={id + "-feedback"}
          aria-invalid={feedbackState === "error"}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onSubmit={onSubmit}
          onChange={onChange && ((ev) => onChange(ev.target.value))}
          value={value}
          onKeyDown={(ev) => {
            // Handle Enter key for submit
            if (ev.key === "Enter" && onSubmit) {
              ev.preventDefault();
              onSubmit();
            }
            // Handle Escape key for clear
            if (ev.key === "Escape" && onClear) {
              ev.preventDefault();
              onClear();
            }
          }}
        />
        {type === "search" && (
          <>
            <button
              type="submit"
              className={styles["uq-search-input__submit"]}
              onClick={onSubmit}
            >
              <span
                className={classNames({
                  [styles["uq-icon"]]: true,
                  [styles["uq-icon--standard--search"]]: true,
                })}
              ></span>
              <span className="visually-hidden">Submit</span>
            </button>
            <button
              className={classNames({
                [styles["uq-search-input__clear"]]: true,
                "visually-hidden": value === "", // Hide clear button if no text
              })}
              onClick={onClear}
            >
              <span
                className={classNames({
                  [styles["uq-icon"]]: true,
                  [styles["uq-icon--standard--x"]]: true,
                })}
              ></span>
              <span className="visually-hidden">Clear</span>
            </button>
          </>
        )}
      </div>
      {(feedback || feedbackState !== undefined) && (
        <span
          id={id + "-feedback"}
          aria-live="polite"
          className={classNames({
            [styles["uq-error-message"]]: feedbackState === "error",
            [styles["uq-success-message"]]: feedbackState === "success",
          })}
        >
          {feedback}
        </span>
      )}
    </div>
  );
};
