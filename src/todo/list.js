import React from 'react';
import TodoListItem from './list-item';

const TodoList = ({ todos, toggleComplete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
