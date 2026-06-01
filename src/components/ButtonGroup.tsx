import type { ReactNode } from "react";
import { ButtonGroupContext } from "./ButtonGroupContext";
import type { ButtonVariant, ButtonSize } from "../types/ButtonTypes";

interface ButtonGroupProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  gap?: string;
}

export function ButtonGroup({
  children,
  variant,
  size,
  gap = "8px",
}: ButtonGroupProps) {
  return (
    <ButtonGroupContext.Provider value={{ variant, size }}>
      <div style={{ display: "flex", alignItems: "center", gap }}>
        {children}
      </div>
    </ButtonGroupContext.Provider>
  );
}
