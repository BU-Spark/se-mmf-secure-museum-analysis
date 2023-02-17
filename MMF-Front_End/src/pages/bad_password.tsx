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
        Invalid password, please try again
      </Typography>
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
      <Button onClick={() => setPageState(PageState.DECRYPTING_DATA)}>
        Submit Password
      </Button>
    </>
  );
};
