import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@mui/material";
import themeOptions from "../theme";
import { loggedState } from "../../App";
import { RecoilRoot, useSetRecoilState } from "recoil";

const SignIn = () => {
  const setIslogged = useSetRecoilState(loggedState);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post("http://164.92.208.145/api/v1/auth/login", {
        username: data.get("email"),
        password: data.get("password"),
      })
      .then(function (response) {
        alert("Success");
        setIslogged(true);
        //window.location.href = "http://localhost:3000";
      })
      .catch(function (error) {
        console.log(error);
        alert("Wrong Registration");
        <RecoilRoot>setIslogged(true);</RecoilRoot>;
        window.location.href = "http://localhost:3000";
      });
  };

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeOptions}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "orange" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <nav>
                    <Link href="/forgetPassword" variant="body2">
                      Forgot password?
                    </Link>
                  </nav>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </RecoilRoot>
  );
};
export default SignIn;
