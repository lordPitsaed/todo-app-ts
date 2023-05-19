import React, { SyntheticEvent, useState } from 'react';

const AddTodoForm: React.FC<{
  addTodo: (label: string, timer: number) => void;
}> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const timer: number = Number(minutes) * 60 + Number(seconds);
    if (inputValue.length > 0) {
      addTodo(inputValue, timer);
    }
    setInputValue('');
    setMinutes('');
    setSeconds('');
  };

  const validateInput = (prevInput: string, input: string) => {
    const regex = /\D+/g;
    if (regex.test(input)) {
      return prevInput ? prevInput : '';
    } else {
      return input;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={inputValue}
        className='new-todo'
        placeholder='What needs to be done?'
        autoFocus
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Min'
        value={minutes}
        onChange={(e) => setMinutes(validateInput(minutes, e.target.value))}
      />
      <input
        className='new-todo-form__timer'
        placeholder='Sec'
        value={seconds}
        onChange={(e) => setSeconds(validateInput(seconds, e.target.value))}
      />
      <button type='submit' hidden />
    </form>
  );
};

export default AddTodoForm;
