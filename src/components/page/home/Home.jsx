import React, { useState } from "react";
import HabitCard from "../../ui/habit/habitcard/HabitCard.jsx";
import TaskList from "../../task/TaskList";
import Calendar from "../../progress/calendar/Calendar";

const Home = () => {
  /*const handleMarkDay = (habitIndex, dayIndex) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].markDay(dayIndex);
    setHabits([...updatedHabits]);
  };
*/
  return (
    <div className="home-page">
      <h1>Мои привычки</h1>
      <Calendar />
      <TaskList
      />
    </div>
  );
};

export default Home;