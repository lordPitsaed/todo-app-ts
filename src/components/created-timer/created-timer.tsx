import { formatDistanceToNow } from 'date-fns';

export default function CreatedTimer({ time }: { time: Date | number }) {
  return (
    <span className='created'>created {formatDistanceToNow(time)} ago</span>
  );
}
