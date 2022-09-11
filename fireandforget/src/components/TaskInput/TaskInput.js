import React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";

const handleChange = () => {};

const TaskInput = () => {
  const [title, setTitle] = useState("");

  return (
    <TextField
      id="outlined-multiline-flexible"
      label="New Task"
      helperText="Enter new task"
      multiline
      fullWidth
      margin="normal"
      color="success"
      maxRows={4}
      value={title}
      required
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button variant="contained" endIcon={<SendIcon />}>
              Fire
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TaskInput;
