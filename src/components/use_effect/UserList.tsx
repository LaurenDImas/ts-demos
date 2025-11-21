import {useEffect, useState} from "react";

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
       const fetchUsers = async() => {
           try{
               const response = await fetch("https://jsonplaceholder.typicode.com/users");
               if(!response.ok) throw new Error("Network response was not ok");
               const data: User[] = await response.json();
               setUsers(data)
           }catch (error) {
               setError(error instanceof Error ? error.message : "Unknown error");
           }finally {
               setLoading(false)
           }
       }
       
       fetchUsers();
    },[])
    
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error: {error}</h1>;
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default UserList
