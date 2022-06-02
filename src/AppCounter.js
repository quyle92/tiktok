//** Tutorial: https://www.youtube.com/watch?v=aBv-Kq8AL94 */
import React, { useState, useEffect } from 'react';
export default function AppCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Counter count={count} setCount={setCount}></Counter>
            <hr></hr>
            <Report count={count}></Report>
        </div>
    );
}

function Counter({ count, setCount }) {
    const [active, setActive] = useState(true);
    return (
        <div>
            <button onClick={() => setCount(count + 1)} disabled={!active}>
                Count: {count}
            </button>
            <button onClick={() => setActive(!active)}>Disable</button>
        </div>
    );
}

function Report({ count }) {
    return <div>Count: {count}</div>;
}
