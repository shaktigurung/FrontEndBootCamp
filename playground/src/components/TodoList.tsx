import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { TodoListItem } from './TodoListItem';
import { Store } from '../store';
import { connect } from 'react-redux';

function mapStateToProps({ todos, filter }: Store) {
  return {
    todos,
    filter
  };
}

function mapDispatchToProps(dispatch: any) {}

type TodoListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class TodoList extends React.Component<TodoListProps> {
  render() {
    const { filter, todos } = this.props;
    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });

    return (
      <Stack gap={10}>
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} />
        ))}
      </Stack>
    );
  }
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { component as TodoList };
