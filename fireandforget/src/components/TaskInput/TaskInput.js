import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const TaskInput = () => {
  return (
    <div className="Input">
      <TextField
        id="outlined-multiline-flexible"
        label="New Task"
        helperText="Enter new task"
        multiline
        fullWidth
        margin="normal"
        color="success"
        maxRows={4}
        value={"placeholder value"}
      />
    </div>
  );
};

export default TaskInput;
