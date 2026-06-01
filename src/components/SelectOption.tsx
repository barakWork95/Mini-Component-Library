import { useContext } from "react";
import { SelectContext } from "./SelectContext";
import type { ReactNode } from "react";

export interface OptionProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

export function SelectOption({ value, children, disabled }: OptionProps) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("Select.Option must be used inside Select");
  const isSelected = ctx.selected === value;

  return (
    <div
      role="option"
      aria-selected={isSelected}
      aria-disabled={disabled}
      onClick={() => !disabled && ctx.onSelect(value, String(children))}
      style={{
        padding: "8px 12px",
        fontSize: "var(--font-size-sm)",
        color: disabled
          ? "var(--color-text-disabled)"
          : isSelected
          ? "var(--color-primary)"
          : "var(--color-text-primary)",
        backgroundColor: isSelected ? "var(--color-surface)" : "transparent",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: isSelected ? 600 : 400,
      }}
    >
      {children}
    </div>
  );
}
