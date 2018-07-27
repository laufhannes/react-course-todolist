import * as React from 'react';

import { TextField } from '@material-ui/core';

interface IFilterTodosProps {
  filterText: string,
  onChange: (newFilterText: string) => void
}

class FilterTodos extends React.PureComponent<IFilterTodosProps, {}> {
  public render() {
    return (
      <TextField label="Filter" value={this.props.filterText} onChange={this.handleOnFilterTextChange} />
    );
  }

  private handleOnFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  }
}

export default FilterTodos;
