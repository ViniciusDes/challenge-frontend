import { ButtonProps as ButtonPropsMUI } from "@mui/material";
import { ReactNode } from "react";

export interface ButtonProps extends ButtonPropsMUI {
  children: ReactNode;
  isSecondary?: boolean;
}
