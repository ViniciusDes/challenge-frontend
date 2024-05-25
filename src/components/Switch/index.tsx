import React from "react";
import SwitchMUI from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { SwitchProps } from "./types";

const Switch: React.FC<SwitchProps> = ({ label, isChecked, ...rest }) => {
  return (
    <FormControlLabel
      control={<SwitchMUI checked={isChecked} {...rest} />}
      label={label}
    />
  );
};

export default Switch;
