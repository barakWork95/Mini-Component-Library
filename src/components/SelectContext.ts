import { createContext } from "react";

export interface SelectContextValue {
  open: boolean;
  selected: string;
  onSelect: (value: string, label: string) => void;
}

export const SelectContext = createContext<SelectContextValue | null>(null);
