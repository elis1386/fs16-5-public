import { Typography } from "@mui/material";
import React from "react";

interface ErrorMessage {
  error: string;
}
export const Error = ({ error }: ErrorMessage) => {
  return (
    <Typography
      sx={{ display: "table-caption" }}
      variant="body2"
      color="error"
      align="center"
    >
      {error}
    </Typography>
  );
};
