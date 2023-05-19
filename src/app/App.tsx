import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { HandlersContext, TodosContext } from '../context';
import { Todo } from '../custom_types';
import Header from '../modules/header/header';
import MainModule from '../modules/main/main';
import { deleteTodoItem, newTodo, setField, toggleProp } from '../todo-helpers';
import './App.css';

export default function App() {
  const getLocalStorageTodos = (): Todo[] => {
    const savedTodos = localStorage.getItem('todos');

    if (typeof savedTodos === 'string') {
      const localStorageTodos: Todo[] = JSON.parse(savedTodos);
      return localStorageTodos;
    } else {
      return [];
    }
  };
  const defaultTodos = getLocalStorageTodos();
  const [todos, setTodos] = useState(defaultTodos);
  const [, setTime] = useState(new Date());
  const tickId: MutableRefObject<
    number | undefined | ReturnType<typeof setTimeout>
  > = useRef();

  const addTodo = (label: string, timer: number) => {
    setTodos((td) => newTodo(td, label, timer));
  };

  const handlers = {
    deleteTodo: (id: number) => {
      setTodos((td) => deleteTodoItem(td, id));
    },
    onToggleDone: (id: number) => {
      setTodos((td) => toggleProp(td, id, 'done'));
    },
    changeLabel: (id: number, newLabel: string) => {
      setTodos((td) => setField(td, id, 'label', newLabel));
    },
    clearCompleted: () => {
      setTodos((td) => td.filter((el) => !el['done']));
    },
  };

  useEffect(() => {
    tickId.current = setInterval(tick, 1000);
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(tickId.current);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <section className='todoapp'>
      <TodosContext.Provider value={todos}>
        <Header
          addTodo={(label: string, timer: number) => addTodo(label, timer)}
        />
        <HandlersContext.Provider value={handlers}>
          <MainModule />
        </HandlersContext.Provider>
      </TodosContext.Provider>
    </section>
  );
}
