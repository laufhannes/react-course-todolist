import * as React from 'react';

import FilterTodos from './FilterTodos';
import TodoTable from './TodoTable';

import {ITodoItem} from '../interfaces';

interface ITodoListProps {
  todos: ITodoItem[],
  onTodoItemToggle: (key: number) => void,
  onTodoItemRemove: (key: number) => void
}

interface ITodoListState {
  filterText: string
}

class TodoList extends React.PureComponent<ITodoListProps, ITodoListState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filterText: ""
    };
  }

  public render() {
    const filteredTodos = this.props.todos.filter((item: ITodoItem) => {
      return item.text.includes(this.state.filterText);
    });
    const numTodos = this.props.todos.length;
    const numHiddenTodos = numTodos - filteredTodos.length;

    return (
      <React.Fragment>
        <FilterTodos filterText={this.state.filterText} onChange={this.handleFilterTextChange} />
        <TodoTable todos={filteredTodos} onTodoItemToggle={this.handleTodoItemToggle} onTodoItemRemove={this.handleTodoItemRemove} />

        <p className="todolist-messages">
          You have {numTodos} item{1 === numTodos ? "" : "s"} on your todo list.<br />
          {0 !== this.state.filterText.length ? 1 === numHiddenTodos ? "1 todo is hidden." : numHiddenTodos + " todos are hidden." : ""}
        </p>
      </React.Fragment>
    );
  }

  private handleFilterTextChange = (newFilterText: string) => {
    this.setState({filterText: newFilterText});
  }

  private handleTodoItemToggle = (key: number) => {
    this.props.onTodoItemToggle(key);
  }

  private handleTodoItemRemove = (key: number) => {
    this.props.onTodoItemRemove(key);
  }
}

export default TodoList;
