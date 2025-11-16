export class Day {
    constructor(date){
        this.date = date;
        this. isToday = this.checkToday(); 
    }
    checkToday(){
        const today = new Date();
        return (
            this.date.getDate() === today.getDate() &&
            this.date.getMonth() === today.getMonth() &&
            this.date.getFullYear() === today.getFullYear()
        );
    }
}