import {useEffect, useState} from "react";

interface Todo {
    title:string;
}
const FetchTodo = () => {
    const [todo, setTodo] = useState<Todo|null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
                if(!res.ok) throw new Error("Network response was not ok")
                const data = await res.json()
                setTodo(data)
            }catch (e) {
                console.error(e)
            }finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if(loading) return <h1>Loading...</h1>

    return (
        <div>{todo?.title}</div>
    )
}
export default FetchTodo
