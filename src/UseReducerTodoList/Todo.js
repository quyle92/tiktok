import React, { useState, useEffect, useRef, useReducer, useMemo, memo, useCallback } from "react";
import { DELETE_JOB } from './constants'

export default function Todo({ jobs, dispatch }) {

    return (
        jobs.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                    <button onClick={() => dispatch({ type: DELETE_JOB, payload: index })}>x</button>
                </li>
            )
        })
    )
}