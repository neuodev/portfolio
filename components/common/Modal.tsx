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
          top: "0%",
          right: "0%",
          width: 800,
          height: "100%",
          boxShadow: 24,
          p: 4,
          "&:focus": {
            outline: "none",
          },
        }}
        className="bg-zinc-800 font-rubik text-gray-100 overflow-x-hidden overflow-y-auto"
      >
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
