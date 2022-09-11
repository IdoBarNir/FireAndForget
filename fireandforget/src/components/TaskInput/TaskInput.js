import React from "react";
import { useState, useEffect } from "react";
import TaskList from "../TaskList/TaskList";

import { db } from "../../firebase/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { TextField, Button, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const dbQuery = query(collection(db, "tasks"), orderBy("timestamp", "desc"));

export default function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    onSnapshot(dbQuery, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [title]);

  const addTask = () => {
    if (title !== "") {
      addDoc(collection(db, "tasks"), {
        title: title,
        timestamp: serverTimestamp(),
        checked: false,
      });
      setTitle("");
    }
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          fullWidth
          multiline
          value={title}
          onChange={(change) => setTitle(change.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={addTask}
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </form>
      <ul>
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
