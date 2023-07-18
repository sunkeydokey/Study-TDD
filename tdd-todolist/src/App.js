import React, { useCallback, useRef, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: false,
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true,
    },
  ]);
  const nextId = useRef(3);
  const onInsert = useCallback(
    (text) => {
      setTodos([...todos, { id: nextId.current, text, done: false }]);
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default App;
