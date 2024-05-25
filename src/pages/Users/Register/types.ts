export interface RegisterProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isEditing: boolean;
}

export interface FormDataInterface {
  email: string;
  lastName: string;
  name: string;
  password: string;
}
