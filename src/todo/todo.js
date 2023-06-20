import React, { useState } from 'react';
import TodoForm from './form';
import TodoList from './list';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = newTodo => {
    if (newTodo !== '') {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  return (
    <div className="todo-app">
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default Todo;
