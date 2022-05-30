import React, { useState, useEffect, useMemo, useCallback } from "react";
import UseCallbackContent from './UseCallbackContent';
export default function UseCallback() {

    const [count, setCount] = useState(0);
    //useMemo() return value of function, useCallback() return the whole function
    //(Ref: https://www.youtube.com/watch?v=_AyFP5s69N4&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=7 6:25)
    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1);
    },[])
    return (
        <>
            <UseCallbackContent onIncrease={handleIncrease}/>
            <p>Count: {count}</p>
        </>
    )
}
