import React from "react";
import { Modal as MuiModal, Box } from "@mui/material";

const Modal: React.FC<{
  open: boolean;
  onClose(): void;
  children: React.ReactNode;
}> = ({ open, onClose, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          pt: 2,
          px: 4,
          pb: 3,
        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
