import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Button, TextField, Typography } from "@mui/material";
import { welcome_msg } from "../content/content";
import { PageState } from "../App";

interface IWelcomePageProps {
  setPageState: (pageState: PageState) => void;
  setPassword: (password: string) => void;
  setAccessCode: (accesscode: string) => void;
}

export const WelcomePage = ({
  setPageState,
  setPassword,
  setAccessCode,
}: IWelcomePageProps) => {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <Typography>{welcome_msg}</Typography>
        </Grid2>
        <Grid2 xs={12} alignItems="center">
          <Typography>If you created a password (when completing the survey), please enter it below.  If you never made a password, you can see overall results by leaving the password field empty and entering your early access code below.</Typography>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid2>
        <Grid2 xs={12} alignItems="center">
          <Typography>At this time results are only accessible with an early access code.  Please enter the early access code below.</Typography>
          <TextField
            id="accesscode"
            label="Access Code"
            variant="outlined"
            type="password"
            onChange={(e) => {
              setAccessCode(e.target.value);
            }}
          />
        </Grid2>
        <Grid2 xs={12} alignItems="center">
          <Button onClick={() => setPageState(PageState.DOWNLOADING_DATA)}>
            Submit & Retrieve Data
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};
