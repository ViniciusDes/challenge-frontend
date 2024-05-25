import { SwitchProps as SwitchPropsMUI } from "@mui/material";

export interface SwitchProps extends SwitchPropsMUI {
  label: string;
  isChecked: boolean;
}
