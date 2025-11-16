export class Task {
  constructor(name, done = false) {
    this.name = name; // название задачи
    this.done = done; // выполнена или нет
  }

  toggleDone() {
    this.done = !this.done; // переключение состояния
  }
}