import AddTodoForm from '../../components/add-todo-form/add-todo-form'
export default function Header({
    addTodo,
}: {
    addTodo: (label: string, timer: number) => void
}) {
    return (
        <header className="header">
            <h1>todos</h1>
            <AddTodoForm
                addTodo={(label: string, timer: number) =>
                    addTodo(label, timer)
                }
            ></AddTodoForm>
        </header>
    )
}
