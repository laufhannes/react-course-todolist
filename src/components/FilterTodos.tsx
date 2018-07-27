import * as React from 'react';

import './FilterTodos.css';

interface IFilterTodosProps {
  filterText: string,
  onChange: (newFilterText: string) => void
}

class FilterTodos extends React.PureComponent<IFilterTodosProps, {}> {
  public render() {
    return (
      <div className="filter">
        <label>
          Filter:
          <input type="text" value={this.props.filterText} onChange={this.handleOnFilterTextChange} />
        </label>
      </div>
    );
  }

  private handleOnFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  }
}

export default FilterTodos;
