import {useState} from "react";
const Counter = () => {
    const [count,setCount] = useState(0);

    return (
        <div>
            <p>The count is in: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Reduce</button>
        </div>
    )
}

export default Counter;