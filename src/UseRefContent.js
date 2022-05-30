import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

export default function UseRefContent() {
    const [count, setCount] = useState(0);
    const timerId = useRef();

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(pre => pre + 1);
        }, 1000);
    }
    const handleStop = () => {
        clearTimeout(timerId.current);
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerId.current);
        }
    },[]);

    const preCount = useRef();
    useEffect(() => {
        preCount.current = count
        console.log("🚀 ~ preCount count", preCount.current)
    }, [count]);
    console.log('count, preCount:::', count, preCount)
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )

    // const inputEl = useRef(null);
    // const onButtonClick = () => {
    //     // `current` points to the mounted text input element
    //     inputEl.current.focus();
    // };
    // return (
    //     <>
    //         <input ref={inputEl} type="text" />
    //         <button onClick={onButtonClick}>Focus the input</button>
    //     </>
    // );
}