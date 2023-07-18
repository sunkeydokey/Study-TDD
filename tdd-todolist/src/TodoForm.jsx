import React, { useCallback, useState } from 'react';

const TodoForm = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value]
  );
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write your TO DO!"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록!</button>
    </form>
  );
};

export default TodoForm;
