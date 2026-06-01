import { type InputHTMLAttributes, forwardRef, useId } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, style, ...props }, ref) => {
    const id = useId();

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {label && (
          <label
            htmlFor={id}
            style={{
              fontSize: "var(--font-size-sm)",
              fontWeight: 500,
              color: error
                ? "var(--color-danger)"
                : "var(--color-text-primary)",
            }}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          style={{
            padding: "8px 12px",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-primary)",
            backgroundColor: "var(--color-surface)",
            border: `1px solid ${
              error ? "var(--color-danger)" : "var(--color-border)"
            }`,
            borderRadius: "var(--radius-md)",
            outline: "none",
            transition: "border-color var(--transition-fast)",
            width: "100%",
            boxSizing: "border-box",
            opacity: props.disabled ? 0.5 : 1,
            cursor: props.disabled ? "not-allowed" : "text",
            ...style,
          }}
          {...props}
        />

        {(helperText || error) && (
          <span
            style={{
              fontSize: "var(--font-size-xs)",
              color: error
                ? "var(--color-danger)"
                : "var(--color-text-secondary)",
            }}
          >
            {error ?? helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
