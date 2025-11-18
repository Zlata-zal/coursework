import React from "react";
import styles from "./SideBar.module.scss";
import { FiUser } from "react-icons/fi";
import TaskList from "../../task/TaskList"; // подключаем старый TaskList
import { Task } from "../../task/Task";

function SideBar() {
  const [tasks, setTasks] = React.useState([
    new Task("Купить продукты"),
    new Task("Прочитать книгу"),
    new Task("Сделать зарядку"),
  ]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].toggleDone();
    setTasks(newTasks);
  };

  return (
    <aside className={styles.sidebar}>
      <button className={styles.accountButton}>
        <FiUser size={24} />
        <span>Аккаунт</span>
      </button>
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </aside>
  );
}

export default SideBar;
