
import React, { useState } from "react";
import "./index.css";

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="container">

            <h2>Counter Application</h2>

            <h3>{count}</h3>

            <p>Current Count</p>

            <button
                className="decrement"
                onClick={decrement}>
                − Decrement
            </button>

            <button
                className="increment"
                onClick={increment}>
                + Increment
            </button>

            <button
                className="reset"
                onClick={reset}>
                Reset
            </button>

        </div>
    );
}

export default Counter;
