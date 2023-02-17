import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Button, TextField, Typography } from "@mui/material";
import { welcome_msg } from "../content/content";
import { PageState } from "../App";

interface IWelcomePageProps {
  setPageState: (pageState: PageState) => void;
  setPassword: (password: string) => void;
}

export const WelcomePage = ({
  setPageState,
  setPassword,
}: IWelcomePageProps) => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <Typography>{welcome_msg}</Typography>
        </Grid2>
        <Grid2 xs={12} alignItems="center">
          <Typography>Please enter your password</Typography>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onClick={() => setPageState(PageState.DOWNLOADING_DATA)}>
            Submit & Retrieve Data
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};
