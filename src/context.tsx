import { createContext } from 'react'
import { EventHandlers, Todo } from './custom_types'
const TodosContext = createContext<Todo[]>([
    {
        label: 'context is not working',
        id: 0,
        done: false,
        edit: false,
        timeCreated: new Date(0),
        timer: 0,
    },
])

const HandlersContext = createContext<EventHandlers>({} as EventHandlers)

export { TodosContext, HandlersContext }
