export default function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log('Prev:', prevState);
        const newState = reducer(prevState, action);
        console.log('Current:', newState);

        console.groupEnd();
        return newState;
    };
}
