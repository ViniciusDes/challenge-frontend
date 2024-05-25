import * as React from "react";
import RadioMUI from "@mui/material/Radio";
import RadioGroupMUI from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { RadioGroupProps } from "./types";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  titleGroup,
  options,
  defaultChecked,
  onCheck,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{titleGroup}</FormLabel>
      <RadioGroupMUI
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultChecked}
        name="radio-buttons-group"
        onChange={(_, item) => onCheck(item)}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.name}
            value={option.name}
            control={<RadioMUI />}
            label={option.label}
          />
        ))}
        {/* <FormControlLabel
          value="female"
          control={<RadioMUI />}
          label="Female"
        />
        <FormControlLabel value="male" control={<RadioMUI />} label="Male" />
        <FormControlLabel value="other" control={<RadioMUI />} label="Other" /> */}
      </RadioGroupMUI>
    </FormControl>
  );
};
