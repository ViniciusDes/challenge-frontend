import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { LoadingProps } from "./types";

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) return <div />;

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
