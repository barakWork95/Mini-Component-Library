/* eslint-disable react-refresh/only-export-components */
import { useState, useRef, useEffect, forwardRef } from "react";
import { SelectContext } from "./SelectContext";
import { SelectOption } from "./SelectOption";
import type { SelectProps } from "./SelectTypes";

const SelectRoot = forwardRef<HTMLDivElement, SelectProps>(
  ({
    label,
    placeholder = "Select an option...",
    error,
    helperText,
    onChange,
    children,
    style,
  }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const [displayLabel, setDisplayLabel] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSelect = (value: string, label: string) => {
      setSelected(value);
      setDisplayLabel(label);
      setOpen(false);
      onChange?.(value);
    };

    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          position: "relative",
          ...style,
        }}
      >
        {label && (
          <label
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

        <div
          role="combobox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          style={{
            padding: "8px 12px",
            fontSize: "var(--font-size-sm)",
            color: selected
              ? "var(--color-text-primary)"
              : "var(--color-text-secondary)",
            backgroundColor: "var(--color-surface)",
            border: `1px solid ${
              error ? "var(--color-danger)" : "var(--color-border)"
            }`,
            borderRadius: "var(--radius-md)",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          {displayLabel || placeholder}
          <span
            style={{
              transition: "transform var(--transition-fast)",
              display: "inline-block",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▾
          </span>
        </div>

        {open && (
          <div
            role="listbox"
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-md)",
              zIndex: 50,
              overflow: "hidden",
            }}
          >
            <SelectContext.Provider
              value={{ open, selected, onSelect: handleSelect }}
            >
              {children}
            </SelectContext.Provider>
          </div>
        )}

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

SelectRoot.displayName = "Select";

export const Select = Object.assign(SelectRoot, { Option: SelectOption });
