export default function ItemsLeft({ items }: { items: number }) {
  return <span className='todo-count'>{items} items left</span>;
}
