import { Todo } from './custom_types'

const toggleProp = (todos: Todo[], id: number, propName: keyof Todo) => {
    const oldItem = todos.filter((el) => el['id'] === id)[0]
    const idx = todos.indexOf(oldItem)
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)]
}

const getItemsFiltered = (filter: string, dataArr: Todo[]) => {
    switch (filter) {
        case 'all':
            return dataArr
        case 'active':
            return dataArr.filter((el) => !el['done'])
        case 'completed':
            return dataArr.filter((el) => el['done'])
        default:
            return dataArr
    }
}

const createTodoItem = (label: string, timer = 0) => {
    return {
        label,
        id: Math.floor(Math.random() * Math.random() * 10000),
        done: false,
        edit: false,
        timeCreated: new Date(),
        timer: timer,
    }
}

const setField = (
    todosArr: Todo[],
    id: number,
    field: keyof Omit<Todo, 'id'>,
    newField: string | number | boolean
) => {
    const oldItem = todosArr.filter((el) => el['id'] === id)[0]
    const idx = todosArr.indexOf(oldItem)
    const newItem = { ...oldItem, [field]: newField }
    return [...todosArr.slice(0, idx), newItem, ...todosArr.slice(idx + 1)]
}

const deleteTodoItem = (todosArr: Todo[], id: number) => {
    return todosArr.filter((el) => el['id'] !== id)
}

const newTodo = (todosArr: Todo[], label: string, timer: number) => {
    console.log(label, timer)
    return [...todosArr, createTodoItem(label, timer)]
}

const formatTimer = (time: number) => {
    const timeSec = time
    const min = Math.floor(timeSec / 60)
    const sec = Math.floor(timeSec % 60)
    const minFormatted = min < 10 ? `0${min}` : `${min}`
    const secFormatted = sec < 10 ? `0${sec}` : `${sec}`
    return `${minFormatted}:${secFormatted}`
}

export {
    toggleProp,
    getItemsFiltered,
    createTodoItem,
    setField,
    deleteTodoItem,
    newTodo,
    formatTimer,
}
