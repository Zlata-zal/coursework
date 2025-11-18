import React from "react";
import styles from "./HabitCard.module.scss";

const HabitCard = ({ habit, onMark }) => {
  return (
    <div className={styles.habitCard}>
      <h2>{habit.name}</h2>
      <div className={styles.habitDays}>
        {habit.history.map((done, i) => (
          <div
            key={i}
            className={`${styles.day} ${done ? styles.done : ""}`}
            onClick={() => onMark(i)}
          />
        ))}
      </div>
      <p>
        Прогресс: {habit.progress}/{habit.goal}
      </p>
    </div>
  );
};

export default HabitCard;
