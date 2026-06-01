import { createContext } from "react";
import type { ButtonVariant, ButtonSize } from "../types/ButtonTypes";

export interface ButtonGroupContextValue {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({});
