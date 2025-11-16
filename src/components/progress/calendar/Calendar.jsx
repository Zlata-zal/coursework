import React from 'react'
import styles from '../calendar/Calendar.module.scss'
import { Day } from '../calendar/CalendarDay'

const Calendar = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()

    const firstDayOfMonth = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const startWeekday = (firstDayOfMonth.getDay() + 6) % 7

    const days = Array.from({ length: daysInMonth }, (_, i) => new Day(new Date(year, month, i + 1)))
    
    const calendarCells =[
        ...Array(startWeekday).fill(null),
        ...days
    ]
    
    return (
       <div className={styles.calendar}>
            <h3 className={styles.calendarTitle}>Календарь</h3>

            {calendarCells.map((day, index) =>
                day === null ? (
                    <div key={index} className={styles.empty}></div>
                ) : (
                    <div
                        key={index}
                        className={`${styles.day} ${day.isToday ? styles.today : ""}`}
                    >
                        {day.date.getDate()}
                    </div>
                )
            )}
        </div> 
    ); 
};

export default Calendar