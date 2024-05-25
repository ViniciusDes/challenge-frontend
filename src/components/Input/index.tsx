import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { InputProps } from "./types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller } from "react-hook-form";

const Input: React.FC<InputProps> = ({
  defaultValue,
  label,
  isRequired,
  type,
  name,
  control,
  inputToSearch,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name ?? ""}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          placeholder={rest?.placeholder ?? ""}
          required={isRequired}
          variant="standard"
          label={label}
          value={value ?? ""}
          defaultValue={defaultValue}
          sx={{
            width: "100%",
          }}
          style={{
            fontStyle: inputToSearch ? "italic" : "normal",
          }}
          onChange={(e) => {
            onChange(e);
            rest.onChangeValue && rest.onChangeValue(e.target.value);
          }}
          autoComplete="off"
          error={!!error}
          InputProps={{
            endAdornment: type === "password" && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword ? "text" : type}
        />
      )}
    />
  );
};

export default Input;
