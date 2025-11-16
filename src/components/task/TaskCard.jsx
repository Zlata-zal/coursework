import React from "react";
import styles from "./TaskCard.module.scss";
//import Task from "../../models/Task.js";

const TaskCard = ({ task, onToggle }) => {
  return (
    <div className={styles.taskCard}>
      <span className={task.done ? styles.done : ""}>{task.name}</span>
      <button onClick={onToggle}>✓</button>
    </div>
  );
};

export default TaskCard;