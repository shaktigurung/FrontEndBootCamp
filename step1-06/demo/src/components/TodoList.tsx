import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos } = this.props;

    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });
    return (
      <ul className="todos">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    );
  }
}
