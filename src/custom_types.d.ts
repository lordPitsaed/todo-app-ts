import ClearCompleted from './components/clear-completed/clear-completed'
interface Todo {
    label: string
    id: number
    done: boolean
    edit: boolean
    timeCreated: Date
    timer: number
}

type Filter = 'all' | 'active' | 'completed'

type DeleteTodo = (id: number) => void
type OnToggleDone = (id: number) => void
type ClearCompleted = () => void
type ChangeLabel = (id: number, newLabel: string) => void

interface EventHandlers {
    deleteTodo: DeleteTodo
    onToggleDone: OnToggleDone
    clearCompleted: ClearCompleted
    changeLabel: ChangeLabel
}

type PropEventHandler = (id?: number) => void
