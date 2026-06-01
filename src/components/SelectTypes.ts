import type { ReactNode } from "react";

export interface SelectProps {
  label?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
  style?: React.CSSProperties;
}
