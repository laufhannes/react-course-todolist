import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
        <TextField label="New todo" value={this.state.newTodoText} onChange={this.onHandleNewTodoTextChange} />
        <Button variant="outlined" color="primary" onClick={this.handleSubmit}>
          Add
        </Button>
      </form>
    );
  }

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (this.state.newTodoText) {
      this.props.onAddTodo(this.state.newTodoText);

      this.setState({newTodoText: ""});
    }
  }

  private onHandleNewTodoTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    this.setState({newTodoText: event.target.value});
  }
}

export default AddTodoForm;
