import * as React from 'react';

import {ITodoItem} from '../interfaces';

import './TodoTable.css';

interface ITodoTableProps {
  todos: ITodoItem[],
  onTodoItemToggle: (key: number) => void,
  onTodoItemRemove: (key: number) => void
}

class TodoTable extends React.Component<ITodoTableProps, {}> {
  constructor(props: any) {
    super(props);

    this.state = {
      test: ""
    };
  }

  public render() {
    return (
      <table className="todotable">
        <tbody>
          {this.props.todos.map(item => (
            <tr key={item.id.toString()} className={item.isDone ? "done" : ""}>
              <td><input type="checkbox" id={"todo_" + item.id.toString()} onChange={this.createTodoStatusChangeHandler(item.id)} checked={item.isDone} /></td>
              <td className="todotable-label"><label htmlFor={"todo_" + item.id.toString()}>{item.text}</label></td>
              <td><span className="todoitem-remove-link" onClick={this.createRemoveClickHandler(item.id)}>🗑</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  private createTodoStatusChangeHandler = (id: number) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      return this.props.onTodoItemToggle(id);
    }
  }

  private createRemoveClickHandler = (id: number) => {
    return (event: React.MouseEvent) => {
      return this.props.onTodoItemRemove(id);
    }
  }
}

export default TodoTable;
