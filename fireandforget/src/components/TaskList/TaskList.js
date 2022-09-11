import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemIcon,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { db } from "../../firebase/firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const TaskList = ({ task }) => {
  return (
    <ListItem>
      <ListItemIcon
        onClick={() => {
          updateDoc(doc(db, "tasks", task.id), { checked: !task.data.checked });
        }}
      >
        <Checkbox edge="start" checked={task.data.checked} disableRipple />
      </ListItemIcon>
      <ListItemText primary={task.data.title} />
      <IconButton edge="end" onClick={() => {}}>
        <EditIcon />
      </IconButton>
      <IconButton
        edge="end"
        onClick={() => {
          deleteDoc(doc(db, "tasks", task.id));
        }}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
export default TaskList;
