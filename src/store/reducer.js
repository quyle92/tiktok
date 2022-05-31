import { SET_JOB, ADD_JOB } from './constants'

const initState = {
    todoInput: '',
    todos: []
}

export default function reducer(prevState, action) {

    switch (action.type) {
        case SET_JOB:
            return {
                ...prevState,
                todoInput: action.payload
            }

        case ADD_JOB:
            /**!THIS IS WRONG IN STRICT MODE */
            // const newState = { ...prevState }; //dùng spread operator sẽ sai khi ở StrictMode. Vì spread operator chỉ create "shallow copy"
            //from object (https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/).
            //=> prevState.todos sẽ được reference tới newState.todos
            //=> khi newState.todos được update thì prevState.todos cũng tự động được update.
            //=> khi run lại lần 2 ở StrictMode (https://reactjs.org/docs/strict-mode.html) thì newState sẽ được add thêm 1 item nữa từ prevState.
            //Solution: dùng JSON.parse(JSON.stringify(prevState)); to create "deep-copy" from object.
            // newState.todos.push(prevState.todoInput);
            // newState.todoInput = '';
            // action.payload.inputEl.current.focus();
            // return newState;

            action.payload.inputEl.current.focus();
            const obj = {
                ...prevState,
                todos: [...prevState.todos, action.payload.todoInput]
            }
            return obj

        default:
            throw new Error("action type is wrong!")
    }
}

export { initState }

