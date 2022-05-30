import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback } from "react";
import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'
import reducer, { initialState } from './reducer'
import logger from './logger'
import Todo from './todo'

export default function UseReducerToDoList() {
    const [state, dispatch] = useReducer(logger(reducer), initialState);
    const inputEl = useRef(null);
    const { job, jobs } = state;

    return (
        <>
            <input ref={inputEl} onChange={(e) => dispatch({ type: SET_JOB, payload: e.target.value })} value={job} />
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