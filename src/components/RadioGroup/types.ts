export interface RadioGroupProps {
  titleGroup: string;
  options: RadioOption[];
  defaultChecked: string;
  onCheck: (valueSelected: string) => void;
}

export type RadioOption = {
  name: string;
  isChecked: boolean;
  label: string;
};
