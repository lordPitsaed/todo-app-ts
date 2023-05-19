import { SyntheticEvent, useState } from 'react';
import { PropEventHandler } from '../../custom_types';
import CreatedTimer from '../created-timer/created-timer';
import Timer from '../timer/timer';

export default function TodoListItem({
  id,
  label,
  done,
  timeCreated,
  timer,
  onToggleDone,
  onDeleteItem,
  onChangeLabel,
}: {
  id: number;
  label: string;
  done: boolean;
  timer: number;
  timeCreated: number | Date;
  onToggleDone: PropEventHandler;
  onDeleteItem: PropEventHandler;
  onChangeLabel: (input: string) => void;
}) {
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(label);
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onChangeLabel(inputValue);
    setEdit(false);
  };

  if (edit) {
    return (
      <div className='view'>
        <form onSubmit={onSubmit}>
          <input
            autoFocus
            value={inputValue}
            type='text'
            className='edit'
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setEdit(false)}
          />
        </form>
      </div>
    );
  }
  return (
    <div className='view'>
      <input
        checked={done}
        className='toggle'
        type='checkbox'
        onChange={() => onToggleDone()}
      />
      <label>
        <span className={'title ' + (done && 'completed')}>{label}</span>
        <Timer id={id} timerCreated={timer} done={done} />
        <CreatedTimer time={timeCreated} />
      </label>
      <button className='icon icon-edit' onClick={() => setEdit(true)} />
      <button
        className='icon icon-destroy'
        onClick={() => {
          onDeleteItem();
        }}
      />
    </div>
  );
}
