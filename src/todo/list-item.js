import React from 'react';

const TodoListItem = ({ todo, toggleComplete }) => {
  return (
    <li>
      <label className={todo.complete ? 'todo-row completed' : 'todo-row'}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
