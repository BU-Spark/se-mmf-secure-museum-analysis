import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import "./App.css";
import { LineChart } from "./components/charts";
import { WelcomePage } from "./pages/welcome";
import { Typography } from "@mui/material";
import { LoadingScreen } from "./pages/loading";
import { GlobalRoutes } from "./pages/routes";
import { decrypt_data, download_data } from "./services/fetch_data";
import { ErrorPage } from "./pages/error";
import { BadPasswordPage } from "./pages/bad_password";

export enum PageState {
  WELCOME,
  DOWNLOADING_DATA,
  DECRYPTING_DATA,
  PASSWORD_ERROR,
  VIEW_DATA,
  ERROR_PAGE,
}

function App() {
  const [progress, setProgress] = useState(0);
  const [currPageState, setCurrPageState] = useState<PageState>(
    PageState.WELCOME
  );
  const [encryptedData, setEncryptedData] = useState<string>("");
  const [decryptedData, setDecryptedData] = useState<Object>({});
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // Helper function to manage the download state and possible transitions
  const handleDownloadState = async () => {
    setProgress(0);
    // Check URL for sessionID and clientID
    const queryParams = new URLSearchParams(window.location.search);
    // TODO: Update this to the correct keys for the sessionID and clientID
    const sessionID = queryParams.get("session");
    const clientID = queryParams.get("participationCode");
    // If they are not found, report an error to the user
    if (sessionID === null || clientID === null) {
      setCurrPageState(PageState.ERROR_PAGE);
      setErrorMsg(
        "Error: Could not get sessionID or clientID from URL. Please check the URL and reload the website"
      );
      return;
    }
    const res = download_data(
      setProgress,
      setEncryptedData,
      sessionID,
      clientID
    );
    navigate(GlobalRoutes.LOADING);
    const return_val = await res;
    // Report error if we got one
    if (return_val === -1) {
      setCurrPageState(PageState.ERROR_PAGE);
      setErrorMsg("Error: Could not download data. Please reload the website");
      return;
    }
    // Kick off decryption if we got the data
    if (return_val === 0) {
      setCurrPageState(PageState.DECRYPTING_DATA);
      return;
    }
    // Handle unknown state
    setCurrPageState(PageState.ERROR_PAGE);
    setErrorMsg("Error: Unknown state. Please reload the website");
  };
  // Handle navigation for us using our "fake" global state
  useEffect(() => {
    const doLogic = async () => {
      switch (currPageState) {
        case PageState.WELCOME:
          navigate(GlobalRoutes.WELCOME);
          break;
        case PageState.DOWNLOADING_DATA:
          handleDownloadState();
          break;
        case PageState.DECRYPTING_DATA:
          // Reset progress since we use the same variable for both download and decrypt
          setProgress(0);

          const queryParams = new URLSearchParams(window.location.search);
          // TODO: Update this to the correct keys for the sessionID and clientID
          const sessionID = queryParams.get("session");
          const clientID = queryParams.get("participationCode");

          const res = decrypt_data(
            encryptedData,
            password,
            sessionID,
            clientID,
            setDecryptedData,
            setProgress
          );
          navigate(GlobalRoutes.LOADING);
          const return_val = await res;
          if (return_val === 0) {
            setCurrPageState(PageState.VIEW_DATA);
            break;
          }
          if (return_val === -1) {
            // Wrong password
            setCurrPageState(PageState.PASSWORD_ERROR);
            break;
          }
          if (return_val === -2) {
            // Bad data
            setCurrPageState(PageState.ERROR_PAGE);
            setErrorMsg("Error: Bad data. Please reload the website");
            break;
          }
          break;
        case PageState.PASSWORD_ERROR:
          setPassword("");
          setDecryptedData({});
          navigate(GlobalRoutes.PASSWORD_ERROR);
          break;
        case PageState.VIEW_DATA:
          navigate(GlobalRoutes.VIEW_DATA);
          break;
        case PageState.ERROR_PAGE:
          navigate(GlobalRoutes.ERROR);
          break;
        default:
          console.log("Error: Invalid page state");
          break;
      }
    };
    doLogic();
  }, [currPageState]);

  return (
    <Grid2 container spacing={2} paddingTop={"1rem"}>
      <Grid2 xs={12}>
        <Grid2 container spacing={2} borderBottom={"solid"}>
          {/* <Grid2 xs={4}>The logo</Grid2> */}
          <Grid2 xs={12} alignSelf={"center"}>
            <Typography variant="h2" fontWeight="bold">
              Museums Moving Forward
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        xs={12}
        padding={currPageState === PageState.VIEW_DATA ? "0.5rem" : "5rem"}
      >
        <Routes>
          <Route
            path={GlobalRoutes.WELCOME}
            element={
              <WelcomePage
                setPassword={setPassword}
                setPageState={setCurrPageState}
              />
            }
          />
          <Route
            path={GlobalRoutes.LOADING}
            element={
              <LoadingScreen progress={progress} loadingState={currPageState} />
            }
          />
          <Route
            path={GlobalRoutes.VIEW_DATA}
            element={<LineChart data={decryptedData} />}
          />
          <Route
            path={GlobalRoutes.ERROR}
            element={<ErrorPage message={errorMsg} />}
          />
          <Route
            path={GlobalRoutes.PASSWORD_ERROR}
            element={
              <BadPasswordPage
                setPageState={setCurrPageState}
                setPassword={setPassword}
              />
            }
          />
        </Routes>
      </Grid2>
    </Grid2>
  );
}

export default App;
