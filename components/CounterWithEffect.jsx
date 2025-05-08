
// Import hook
import { useEffect, useState } from "react";

// Create component
const CounterWithEffect = () => {

    const [count,setCount] = useState(0);

    // hook useEffect for react
    useEffect(() => {
        console.log(`The counter changed to:  ${count}`)
    }, [count] )


   
    return (
        <div>
            <p>The counter is in: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Reduce</button>
        </div>
    )
};



// Export component
export default CounterWithEffect;