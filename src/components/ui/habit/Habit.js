export class Habit {
    constructor(name, goal = 21){
        this.name = name;
        this.goal = goal;
        this.progress = 0;
        this.history = Array(goal).fill(false);
    }

    markDay(dayIndex){
        if (dayIndex >= 0 && dayIndex < this.goal){
            this.history[dayIndex] = !this.history[dayIndex];
            this.progress = this.history.filter(Boolean).length;
        }
    }
    getCompletionRate(){
        return (this.progress / this.goal) * 100;
    }
}
