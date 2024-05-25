import React from "react";
import { Button as ButtonMUI } from "@mui/material";
import { ButtonProps } from "./types";
import { colors } from "@/styles/global";

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  isSecondary,
  ...rest
}) => {
  return (
    <ButtonMUI
      color="primary"
      variant="text"
      type={type}
      sx={{
        width: "100%",
        background: isSecondary ? colors.blue : colors.primary,
        color: "#fff",
      }}
      {...rest}
    >
      {children}
    </ButtonMUI>
  );
};

export default Button;
