import React, { forwardRef, type ElementType } from "react";
import { useButtonGroup } from "../hooks/useButtonGroup";
import { ButtonGroup } from "./ButtonGroup";
import type {
  ButtonVariant,
  ButtonSize,
  ButtonProps,
} from "../types/ButtonTypes";

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-text-inverse)",
    border: "none",
  },
  secondary: {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-text-primary)",
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-primary)",
    border: "1px solid var(--color-primary)",
  },
  danger: {
    backgroundColor: "var(--color-danger)",
    color: "var(--color-text-inverse)",
    border: "none",
  },
  warning: {
    backgroundColor: "var(--color-warning)",
    color: "var(--color-text-inverse)",
    border: "none",
  },
  success: {
    backgroundColor: "var(--color-success)",
    color: "var(--color-text-inverse)",
    border: "none",
  },
  info: {
    backgroundColor: "var(--color-info)",
    color: "var(--color-text-inverse)",
    border: "none",
  },
  ai: {
    background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
    color: "white",
    border: "none",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "4px 10px", fontSize: "var(--font-size-xs)" },
  md: { padding: "8px 16px", fontSize: "var(--font-size-sm)" },
  lg: { padding: "12px 24px", fontSize: "var(--font-size-md)" },
};

const ButtonBase = forwardRef(
  <C extends ElementType = "button">(
    {
      as,
      variant,
      size,
      loading = false,
      disabled,
      children,
      style,
      ...props
    }: ButtonProps<C>,
    ref: React.ForwardedRef<unknown>
  ) => {
    const group = useButtonGroup();
    const resolvedVariant = (variant ??
      group.variant ??
      "primary") as ButtonVariant;
    const resolvedSize = (size ?? group.size ?? "md") as ButtonSize;
    const isDisabled = disabled || loading;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = (as ?? "button") as any;

    return (
      <Component
        ref={ref}
        disabled={Component === "button" ? isDisabled : undefined}
        style={{
          ...variantStyles[resolvedVariant],
          ...sizeStyles[resolvedSize],
          borderRadius: "var(--radius-md)",
          cursor: isDisabled ? "not-allowed" : "pointer",
          opacity: isDisabled ? 0.5 : 1,
          transition:
            "opacity var(--transition-fast), background-color var(--transition-fast)",
          fontWeight: 500,
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          ...style,
        }}
        {...props}
      >
        {loading && <span>⏳</span>}
        {children}
      </Component>
    );
  }
);

ButtonBase.displayName = "Button";

export const Button = Object.assign(ButtonBase, { Group: ButtonGroup });
