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

function getInitValue(key) {
    const initValue = localStorage.getItem(key);
    return initValue ?? '';
}

export default function useLocalStorage(key) {
    const [name, setName] = useState(() => {
        return getInitValue(key);
    });
    useEffect(() => {
        localStorage.setItem(key, name);
    });
    return [name, setName];
}
