import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "tachyons";

import { TextField, Button, InputAdornment } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Login() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TextField
        id="outlined-basic"
        label="User"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained">My Notes</Button>
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
}

export default Login;
