import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';
//ref: https://www.youtube.com/watch?v=6ThXsUwLWvc&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=8

export default function App() {
    const [name, setName] = useLocalStorage('data');
    useUpdateLogger(name);
    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </>
    );
}
