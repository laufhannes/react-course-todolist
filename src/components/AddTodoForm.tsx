import * as React from 'react';

import './AddTodoForm.css';

interface IAddTodoFormProps {
  onAddTodo: (newTodoText: string) => void
}

interface IAddTodoFormState {
  newTodoText: string
}

class AddTodoForm extends React.PureComponent<IAddTodoFormProps, IAddTodoFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      newTodoText: ""
    };
  }

  public render() {
    return (
      <form className="AddTodoForm" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.newTodoText} onChange={this.onHandleNewTodoTextChange} />
        <button>
          Add
        </button>
      </form>
    );
  }

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onAddTodo(this.state.newTodoText);

    this.setState({newTodoText: ""});
  }

  private onHandleNewTodoTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    this.setState({newTodoText: event.target.value});
  }
}

export default AddTodoForm;
