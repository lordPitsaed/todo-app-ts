import { formatDistanceToNow } from 'date-fns'

export default function CreatedTimer({ time }: { time: Date }) {
    return (
        <span className="created">created {formatDistanceToNow(time)} ago</span>
    )
}
