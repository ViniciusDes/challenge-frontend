import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ModalMUI from "@mui/material/Modal";
import { ModalProps } from "./types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  title,
}) => {
  return (
    <div>
      <ModalMUI
        open={isOpen}
        onClose={setIsOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>

          {children}
        </Box>
      </ModalMUI>
    </div>
  );
};
