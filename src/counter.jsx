import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    const addthree = () => {
        setCount(count + 3);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={addthree}>Increment</button>
        </div>
    );
    }
