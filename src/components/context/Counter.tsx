import {type FC, useContext} from "react";
import {MyContext} from "./MyContext.tsx";

const Counter: FC = () => {
    const {count, increment, decrement} = useContext(MyContext)
    
    return (
        <div>
            <p>Count {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter
