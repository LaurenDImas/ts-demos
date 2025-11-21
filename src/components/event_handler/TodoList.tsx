import {useState} from "react";

interface Todo{
    id: number;
    task: string;
    completed: boolean;
}

const TodoList = () => {
    const [ todos, setTodos] = useState<Todo[]>([]);
    
    const addTodo = (task: string) => {
        setTodos((prev) => [...prev, {
            id: todos.length + 1,
            task,
            completed: true,
        }])
    }
    return (
        <div>
            <h2>Todo List</h2>
            
            <button onClick={() => addTodo('New Todo')}>Add Todo</button>
            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.task} {todo.completed ? '(Completed)' : ''}</li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList
