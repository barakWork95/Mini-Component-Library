import type { ElementType } from "react";
import type { PolymorphicProps } from "./polymorphic";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "warning"
  | "success"
  | "info"
  | "ai";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export type ButtonProps<C extends ElementType = "button"> = PolymorphicProps<
  C,
  ButtonOwnProps
>;
