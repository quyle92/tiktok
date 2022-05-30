import React, { useState, useEffect, useLayoutEffect } from 'react';
/**
 ** useEffect vs useLayoutEffect
 */
// 1.useEffect
//- update State.
//- mutate DOM.
//- render UI.
//- perform cleanup task.
//- call cb.

// 2.useLayoutEffect
//- update State.
//- mutate DOM.
//- perform cleanup task.
//- call cb.
//- render UI.
export default function UseLayoutEffect() {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    });

    return (
        <div>
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Click me!
            </button>
        </div>
    )
}