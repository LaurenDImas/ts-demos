import {counterReducer, type CounterState} from "./counterReducer.ts";
import {useReducer} from "react";

const initialState: CounterState = {count: 0};

const MyCounterReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    
    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment count</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement count</button>
        </div>
    )
}
export default MyCounterReducer
