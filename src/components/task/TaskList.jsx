import React from "react";
import styles from "./TaskList.module.scss";
import HabitCard from "../habitcard/HabitCard";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks = [], onToggleTask }) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task, i) => (
        <TaskCard
          key={task.name}
          task={task}
          onToggle={() => onToggleTask(i)}
        />
      ))}
    </div>
  );
}
