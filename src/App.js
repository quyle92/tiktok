import React, { useState } from 'react';

function App() {
    const [state, setState] = useState({
        age: 10,
        fruit: 'banana',
    });
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        setState((prevState) => {
            return {
                age: ++state.age,
                fruit: state.fruit,
            };
        });
    };
    const handleCount = () => {
        //** Option 1 is a short-cut of option 2. React only re-renders if setCount() returns a value that is different from count (ref: https://reactjs.org/docs/hooks-reference.html#usestate "If your update function returns the exact same value as the current state, the subsequent rerender will be skipped completely."), that's a reason why option 3 will fail.  */
        //Option 1
        setCount(count + 1);
        //Option 2
        setCount(() => {
            const a = count + 1;
            return a;
        });
        //Option 3
        setCount(() => {
            const a = ++count;
            return a;
        }); //!this will make count and setCount() have same value => not trigger re-render.
    };

    return (
        <div className="App">
            <p>age:{state.age}</p>
            <p>fruit:{state.fruit}</p>
            <p>count:{count}</p>
            <button onClick={handleIncrease}>Click me!</button>
            <button onClick={handleCount}>Count</button>
        </div>
    );
}

export default App;
