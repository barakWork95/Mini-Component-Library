export const tokens = {
  colors: {
    primary: "var(--color-primary)",
    primaryHover: "var(--color-primary-hover)",
    secondary: "var(--color-secondary)",
    secondaryHover: "var(--color-secondary-hover)",
    danger: "var(--color-danger)",
    dangerHover: "var(--color-danger-hover)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    info: "var(--color-info)",
    bg: "var(--color-bg)",
    surface: "var(--color-surface)",
    border: "var(--color-border)",
    textPrimary: "var(--color-text-primary)",
    textSecondary: "var(--color-text-secondary)",
    textDisabled: "var(--color-text-disabled)",
    textInverse: "var(--color-text-inverse)",
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    full: "var(--radius-full)",
  },
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  },
  transition: {
    fast: "var(--transition-fast)",
    base: "var(--transition-base)",
  },
} as const;

export type ThemeOverride = {
  primary?: string;
  primaryHover?: string;
  secondary?: string;
  secondaryHover?: string;
  danger?: string;
  bg?: string;
  surface?: string;
  border?: string;
  textPrimary?: string;
  textSecondary?: string;
};
