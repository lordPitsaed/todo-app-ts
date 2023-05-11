import { useContext } from 'react'
import { HandlersContext } from '../../context'
import { Todo } from '../../custom_types'
import TodoListItem from '../todo-list-item/todo-list-item'

export default function TodoList({ todos }: { todos: Todo[] }) {
    const handlers = useContext(HandlersContext)

    const elements = todos.map((todo) => {
        const { label, id, done, timeCreated, timer } = todo
        return (
            <li key={id} className={`todo-item`}>
                <TodoListItem
                    id={id}
                    label={label}
                    done={done}
                    timer={timer}
                    timeCreated={
                        typeof timeCreated === 'string'
                            ? Date.parse(timeCreated)
                            : timeCreated
                    }
                    onToggleDone={() => handlers.onToggleDone(id)}
                    onDeleteItem={() => handlers.deleteTodo(id)}
                    onChangeLabel={(newLabel: string) => {
                        handlers.changeLabel(id, newLabel)
                    }}
                ></TodoListItem>
            </li>
        )
    })
    return <ul className="todo-list">{elements}</ul>
}
