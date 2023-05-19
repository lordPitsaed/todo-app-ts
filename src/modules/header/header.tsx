import React from 'react';
import AddTodoForm from '../../components/add-todo-form/add-todo-form';
const Header: React.FC<{ addTodo: (label: string, timer: number) => void }> = ({
  addTodo,
}) => {
  return (
    <header className='header'>
      <h1>todos</h1>
      <AddTodoForm
        addTodo={(label: string, timer: number) => addTodo(label, timer)}
      ></AddTodoForm>
    </header>
  );
};
export default Header;
