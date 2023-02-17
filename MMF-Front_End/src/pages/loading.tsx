import { Box, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import * as React from "react";
import { PageState } from "../App";

interface ILoadingScreenProps {
  progress: number;
  loadingState: PageState;
}
const download_msg = "Downloading data from the server, please wait!";
const decrypt_msg = "Decrypting data, please wait!";

const renderMsg = (loadingState: PageState) => {
  switch (loadingState) {
    case PageState.DOWNLOADING_DATA:
      return download_msg;
    case PageState.DECRYPTING_DATA:
      return decrypt_msg;
    default:
      return "Invalid loading state";
  }
};

export const LoadingScreen = ({
  progress,
  loadingState,
}: ILoadingScreenProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography>{renderMsg(loadingState)}</Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
