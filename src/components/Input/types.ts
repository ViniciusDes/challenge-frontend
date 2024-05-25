import { InputProps as InputPropsMUI } from "@mui/material";
import { Control } from "react-hook-form";

export interface InputProps extends InputPropsMUI {
  value?: string | number;
  label: string;
  isRequired?: boolean;
  type: string;
  control: Control | any;
  inputToSearch?: boolean;
  onChangeValue?: (value: string) => void;
}
