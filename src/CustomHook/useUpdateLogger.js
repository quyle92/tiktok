import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
    useMemo,
    memo,
    useCallback,
    useContext,
    useImperativeHandle,
    forwardRef,
} from 'react';

export default function useUpdateLogger(name) {
    useEffect(() => {
        console.log(name);
    }, [name]);
}
