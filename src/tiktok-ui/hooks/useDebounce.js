import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext, useImperativeHandle, forwardRef, useTransition } from "react";

//ref: https://usehooks.com/useDebounce/
function useDebounce(val, delay) {
    const [debouncedVal, setdebouncedVal] = useState();
    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebouncedVal(val);
        }, delay);

        return () => {
            clearTimeout(timerId);
        }
    }, [val]);

    return debouncedVal;
}

export default useDebounce;