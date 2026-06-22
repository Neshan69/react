import { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>Counter App</h2>
            <div>{count}</div>
            <button onClick={handleIncrement}>
                Increment
            </button>
            <button onClick={handleDecrement}>
                Decrement
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};

export default CounterApp;