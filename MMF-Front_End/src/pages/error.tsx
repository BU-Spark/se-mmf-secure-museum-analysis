import { Typography } from "@mui/material";

export const ErrorPage = ({ message }: { message: string }) => {
  return (
    <Typography fontWeight={"bold"} variant="h3">
      {message}
    </Typography>
  );
};
