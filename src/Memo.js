import React, { useState, useEffect, useMemo } from 'react';
import MemoContent from './MemoContent';
export default function Memo() {
    const [count, setCount] = useState(0);

    //** Kyle example (https://www.youtube.com/watch?v=THL1OPn72vo&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=3) **/
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(0);
    const doubleNumber = useMemo(() => number && slowFunction(number), [number]);
    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? '#333' : '#fff',
            color: dark ? '#fff' : '#333',
        };
    }, [dark]);
    useEffect(() => {
        console.log('Theme changed!');
    }, [themeStyle]);

    return (
        <>
            <MemoContent />
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>

            {/*Example from Kyle (https://www.youtube.com/watch?v=THL1OPn72vo&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=3). */}
            <input type="number" onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setDark(!dark)}>Change theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    );
}

function slowFunction(number) {
    console.log('slowFunction');
    for (var i = 0; i < 500000000; i++) {}
    return number * 2;
}
