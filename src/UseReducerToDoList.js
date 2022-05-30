import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback } from "react";

const initialState = {
    job: '',
    jobs: []
};
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const reducer = (state, action) => {
    if (action.type === SET_JOB) {
        const job = action.payload
        return { ...state, job };
    }

    if(action.type === ADD_JOB) {
        state.jobs.push(state.job);
        state.job = '';
        action.payload.current.focus();
        //return state;// (1)
        return {...state};
    }

    if (action.type === DELETE_JOB) {
        state.jobs.splice(action.payload, 1);
        return { ...state };
    }
}

export default function UseReducerToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputEl = useRef(null);
    const {job, jobs} = state;

    return (
        <>
            <input ref={inputEl} onChange={(e) => dispatch({ type: SET_JOB, payload: e.target.value })} value={job}/>
            <button onClick={() => dispatch({ type: ADD_JOB, payload: inputEl })}>Add</button>
            <ul>
                {
                    jobs.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                                <button onClick={() => dispatch({ type: DELETE_JOB, payload: index })}>x</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
/**Note */
//(1)return like this will not trigger re-rendered as you're making last state and current state the same. That is sth like:
// const lastState = { isAwesome: true };
// const currentState = lastState;
// currentState.name = 'nam';
// console.log(currentState === lastState);// true