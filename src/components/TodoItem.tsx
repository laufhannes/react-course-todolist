class TodoItem {
  constructor(public id: number, public text: string, public isDone: boolean = false) {

  }

  public setDone(flag: boolean = true) {
    this.isDone = flag;
  }
}

export default TodoItem;
