import { useState } from 'react';
import { Filter } from '../../custom_types';

export default function Filters({
  onFilterChange,
}: {
  onFilterChange: (filter: Filter) => void;
}) {
  const [selected, setSelected] = useState(0);
  return (
    <ul className='filters'>
      <li>
        <button
          onClick={() => {
            setSelected(0);
            onFilterChange('all');
          }}
          className={`${selected === 0 && 'selected'}`}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setSelected(1);
            onFilterChange('active');
          }}
          className={`${selected === 1 && 'selected'}`}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setSelected(2);
            onFilterChange('completed');
          }}
          className={`${selected === 2 && 'selected'}`}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
