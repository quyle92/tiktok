export function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log(prevState);
        const newState = reducer(prevState, action);
        console.log(newState);
        console.groupEnd();
        return newState;
    };
}
