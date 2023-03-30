import Grid2 from "@mui/material/Unstable_Grid2";
import { Button, TextField, Typography } from "@mui/material";
import { PageState } from "../App";

interface IBadPasswordPageProps {
  setPageState: (pageState: PageState) => void;
  setPassword: (password: string) => void;
}

export const BadPasswordPage = ({
  setPassword,
  setPageState,
}: IBadPasswordPageProps) => {
  return (
    <>
      <Typography fontWeight={"bold"} variant="subtitle1">
        Invalid password or access code, please try again
      </Typography>
      <Grid2 xs={12} alignItems="center">

      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        color="error"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      </Grid2>

      <Grid2 xs={12} alignItems="center">
        <TextField
          id="accesscode"
          label="Access Code"
          variant="outlined"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Grid2>
      <Button onClick={() => setPageState(PageState.DECRYPTING_DATA)}>
        Submit Password
      </Button>
    </>
  );
};
