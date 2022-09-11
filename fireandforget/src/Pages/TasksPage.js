import React from "react";

import Header from "../components/Header/Header";
import TaskInput from "../components/TaskInput/TaskInput";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "tachyons";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function TasksPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TaskInput />
    </ThemeProvider>
  );
}

export default TasksPage;
