import { useContext, useState } from 'react';
import '../../components/todo-list-item/todo-list-item';
import TodoList from '../../components/todo-list/todo-list';
import { TodosContext } from '../../context';
import { Filter } from '../../custom_types';
import { getItemsFiltered } from '../../todo-helpers';
import Footer from '../footer/footer';

export default function MainModule() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const todos = getItemsFiltered(selectedFilter, useContext(TodosContext));

  const onFilterChange = (filter: 'all' | 'active' | 'completed') => {
    setSelectedFilter(filter);
  };

  return (
    <section className='main'>
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <span className='notFound'>Nothing to do!</span>
      )}
      <Footer
        items={todos.filter((el) => !el['done']).length}
        onFilterChange={(filter: Filter) => {
          onFilterChange(filter);
        }}
      />
    </section>
  );
}
