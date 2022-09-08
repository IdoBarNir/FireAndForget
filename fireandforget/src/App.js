import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "tachyons";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header />
          <TaskInput />
          <TaskList />
          {/*<Checkmark />
        <EditButtons />
        <DeleteButtons />
        */}
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
