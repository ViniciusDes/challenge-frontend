import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
  title: string;
}
