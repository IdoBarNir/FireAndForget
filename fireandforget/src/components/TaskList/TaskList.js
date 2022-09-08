import React from "react";
import { useState, useEffect } from "react";
import "./TaskList.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

import { db } from "../../firebase/firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";

const tasksCollectionRef = collection(db, "tasks");

const TaskList = () => {
  const [checked, setChecked] = useState([0]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = onSnapshot(tasksCollectionRef, (snapshot) => {
      console.log("wow! a new task has just been added!");
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      getTasks();
    };
  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className="task-list">
      {/* explicit value here, change! */}
      {tasks.map((task) => {
        const labelId = `checkbox-list-label-${task.id}`;

        return (
          <ListItem key={task.id}>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(task.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(task.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${task.data.title}`} />
            </ListItemButton>
            <ListItemSecondaryAction>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TaskList;
