import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  const setup = (props = {}) => {
    render(<TodoForm {...props} />);
    const inputElement = screen.getByPlaceholderText('Write your TO DO!');
    const buttonElement = screen.getByText('등록!');
    return {
      inputElement,
      buttonElement,
    };
  };

  it('<TodoForm>', () => {
    render(<TodoForm />);
    screen.getByPlaceholderText('Write your TO DO!');
    screen.getByText('등록!');
  });

  it('has input and button elements', () => {
    const { inputElement, buttonElement } = setup();
    expect(inputElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  it('changes input texts', () => {
    const { inputElement } = setup();
    fireEvent.change(inputElement, {
      target: {
        value: 'Study TDD',
      },
    });
    expect(inputElement).toHaveAttribute('value', 'Study TDD');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();
    const { inputElement, buttonElement } = setup({ onInsert });

    fireEvent.change(inputElement, {
      target: {
        value: 'Study TDD',
      },
    });

    fireEvent.click(buttonElement);
    expect(onInsert).toBeCalledWith('Study TDD');
    expect(inputElement).toHaveAttribute('value', '');
  });
});
