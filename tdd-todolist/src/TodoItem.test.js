import React from 'react';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const sampleTodo = {
    id: 1,
    text: 'Study TDD',
    done: false,
  };

  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    render(<TodoItem {...initialProps} {...props} />);
    const todo = props.todo || initialProps.todo;
    const spanElement = screen.getByText(todo.text);
    const buttonElement = screen.getByText('삭제');

    return {
      spanElement,
      buttonElement,
    };
  };

  it('has span and button elements', () => {
    const { spanElement, buttonElement } = setup();
    expect(spanElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  it('styles line-through text-decoration on span when todo is done', () => {
    const { spanElement } = setup({ todo: { ...sampleTodo, done: true } });
    expect(spanElement).toHaveStyle('text-decoration:line-through');
  });

  it('does not styles line-through text-decoration on span when todo is not done', () => {
    const { spanElement } = setup({ todo: { ...sampleTodo, done: false } });
    expect(spanElement).not.toHaveStyle('text-decoration:line-through');
  });

  it('calls onToggle', () => {
    const onToggle = jest.fn();
    const { spanElement } = setup({ onToggle });
    fireEvent.click(spanElement);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it('calls onRemove', () => {
    const onRemove = jest.fn();
    const { buttonElement } = setup({ onRemove });
    fireEvent.click(buttonElement);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
