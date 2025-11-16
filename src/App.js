import React, { useState } from "react";
import { Habit } from "../src/models/Habit.js";
import HabitCard from "./components/habitcard/HabitCard";
import Header from "./components/header/Header"; 
import SideBar from "./components/sidebar/SideBar.jsx";
import TaskList from "./components/task/TaskList.jsx";
import Calendar from "./components/progress/calendar/Calendar.jsx";


function App() {
  const [habits, setHabits] = useState([
    new Habit("Чтение", 7),
    new Habit("Зарядка", 10),
  ]);

  const handleMarkDay = (habitIndex, dayIndex) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].markDay(dayIndex);
    setHabits([...updatedHabits]);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <SideBar />
        <Calendar/>
        <div className="content">
          <h1>Мои привычки</h1>
          <TaskList
            habits={habits}
            onMark={handleMarkDay}
          />
        </div>
      </div>
    </div>
  );
}

export default App;