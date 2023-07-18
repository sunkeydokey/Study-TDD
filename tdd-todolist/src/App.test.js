import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders TodoForm and TodoList', () => {
    render(<App />);
    screen.getByText('등록!');
    screen.getByTestId('TodoList');
  });

  it('renders two defaults todos', () => {
    render(<App />);
    screen.getByText('TDD 배우기');
    screen.getByText('react-testing-library 사용하기');
  });

  it('creates new Todo', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('Write your TO DO!');
    const buttonElement = screen.getByText('등록!');

    fireEvent.change(inputElement, {
      target: {
        value: '새 항목 추가하기',
      },
    });
    fireEvent.click(buttonElement);

    screen.getByText('새 항목 추가하기');
  });

  it('toggles todo', () => {
    render(<App />);
    const todoText = screen.getByText('TDD 배우기');
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  it('removes todo', () => {
    render(<App />);
    const todoText = screen.getByText('TDD 배우기');
    // eslint-disable-next-line testing-library/no-node-access
    fireEvent.click(todoText.nextSibling);
    expect(todoText).not.toBeInTheDocument();
  });
});
