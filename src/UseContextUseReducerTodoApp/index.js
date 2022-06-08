import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback, useContext } from 'react';
import { StoreProvider, actions, useProvider } from './store';

function Todo() {
    const [state, dispatch] = useProvider();
    const { todoInput, todos } = state;
    const inputEl = useRef();

    // eslint-disable-next-line no-debugger
    return (
        <div>
            <input
                value={todoInput}
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
                ref={inputEl}
            />
            <button
                onClick={() => {
                    dispatch(actions.addTodoItem({ todoInput, inputEl }));
                    dispatch(actions.setTodoInput(''));
                }}
            >
                Add
            </button>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            {todo}{' '}
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => dispatch(actions.removeTodoItem(index))}
                            >
                                ✖
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default function App() {
    return (
        <StoreProvider>
            <Head></Head>
            <Todo />
        </StoreProvider>
    );
}

//test only: <Head /> will not re-render when <StoreProvider> re-render as it does not import useContext() from Provider class.
// Ref: https://www.youtube.com/watch?v=GE4jeED9B1s&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=48 (comment of "IG Dev" )
function Head() {
    console.log('hello');
    return <h1>hello</h1>;
}
