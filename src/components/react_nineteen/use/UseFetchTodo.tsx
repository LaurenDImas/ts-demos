import {use} from "react";

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json()
}

const todoPromise = fetchData();

const UseFetchTodo = () => {
    const data = use(todoPromise)
    
    return (
        <div>{data.title}</div>
    )
}
export default UseFetchTodo
