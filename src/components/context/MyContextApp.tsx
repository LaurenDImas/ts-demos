import MyProvider from "./MyContext.tsx";
import Counter from "./Counter.tsx";
import CounterReducer from "./CounterReducer.tsx";
import MyCounterReducer from "./MyCounterReducer.tsx";

const MyContextApp = () => {
    return (
        <div>
            <MyProvider><Counter /><CounterReducer /><MyCounterReducer/></MyProvider>
        </div>
    )
}
export default MyContextApp
