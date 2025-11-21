import {type SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
}

const RForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<FormData>();
    
    const [users, setUsers] = useState<FormData[]>([]);
    
    const onSubmit: SubmitHandler<FormData> = (data) => {
        setUsers(prevState => [...prevState, data]);
        reset({
            name: '',
            email: '',
            password: '',
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        {...register('name', {
                            required: 'Name is required'
                        })}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register('password', {
                            minLength:{
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        })}
                    />
                    {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
                </div>
                <button disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Submit'}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default RForm
