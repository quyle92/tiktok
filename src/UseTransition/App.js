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
    useTransition,
} from 'react';

//* THIS HOOK IS ONLY FOR REACT 18. Ref: https://www.youtube.com/watch?v=N5R6NL3UE7I&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=10
export default function App() {
    const [value, setValue] = useState('');
    const [lists, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);

        startTransition(() => {
            const l = [];
            for (let i = 0; i < 2000; i++) {
                l.push(val);
            }
            setList(l);
        });
    };
    console.log(lists);
    return (
        <>
            <input value={value} onChange={handleChange} />
            <ul>
                {isPending
                    ? 'Loading...'
                    : lists.map((list, index) => {
                        return <li key={index}>{list}</li>;
                    })}
            </ul>
        </>
    );
}
