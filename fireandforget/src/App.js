import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Login from "./Pages/Login";
import TasksPage from "./Pages/TasksPage";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </nav>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
