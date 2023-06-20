import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="Add a todo"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
