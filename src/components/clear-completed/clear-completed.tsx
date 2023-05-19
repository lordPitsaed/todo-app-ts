import { useContext } from 'react';
import { HandlersContext } from '../../context';

export default function ClearCompleted() {
  const handlers = useContext(HandlersContext);

  return (
    <button
      className='clear-completed'
      onClick={() => {
        handlers.clearCompleted();
      }}
    >
      Clear completed
    </button>
  );
}
