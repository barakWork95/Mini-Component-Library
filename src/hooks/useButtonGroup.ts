import { useContext } from "react";
import { ButtonGroupContext } from "../components/ButtonGroupContext";
import type { ButtonGroupContextValue } from "../components/ButtonGroupContext";

export function useButtonGroup(): ButtonGroupContextValue {
  return useContext(ButtonGroupContext);
}
