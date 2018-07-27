import * as React from 'react';
import SimpleStorage from "./SimpleStorage";

import {ITodoItem} from '../interfaces';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

import './App.css';

import logo from '../resources/logo.svg';
import AddTodoForm from './AddTodoForm';

interface IAppState {
  filterText: string,
  nextTodoId: number,
  todos: ITodoItem[]
};

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filterText: "",
      nextTodoId: 3,
      todos: [
        new TodoItem(1, "Listen to React course", true),
        new TodoItem(2, "Understand React course")
      ]
    };
  }

  /*public componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  public componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }*/

  public render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Get those things done!</h1>
        </header>

        <main>
          <section>
            <TodoList todos={this.state.todos} onTodoItemToggle={this.handleTodoItemToggle} onTodoItemRemove={this.handleTodoItemRemove} />
            <AddTodoForm onAddTodo={this.handleNewTodo} />
          </section>
        </main>
      </div>
    );
  }

  public handleNewTodo = (text: string) => {
    this.setState(state => ({
      nextTodoId: state.nextTodoId + 1,
      todos: [...state.todos, new TodoItem(this.state.nextTodoId, text)]
    }));
  }

  private handleTodoItemToggle = (key: number) => {
    this.setState(state => {
      return {
        todos: state.todos.map((todo) => {
          if (key === todo.id) {
            return {
              ...todo,
              isDone: !todo.isDone
            }
          }

          return todo;
        })
      }
    })
  }

  private handleTodoItemRemove = (key: number) => {
    this.setState(state => {
      const newTodos = [];

      for (const todo of state.todos) {
        if (key !== todo.id) {
          newTodos.push(todo);
        }
      }

      return {
        todos: newTodos
      }
    })
  }

  /*private hydrateStateWithLocalStorage() {
    for (const key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        if (value) {
          value = JSON.parse(value);
        }

        this.setState({ ...this.state, [key]: value });
      }
    }
  }

  private saveStateToLocalStorage() {
    for (const key of Object.keys(this.state)) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }*/
}

export default App;
