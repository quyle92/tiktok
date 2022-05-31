import { SET_JOB, ADD_JOB } from './constants';

export function setTodoInput(payload) {
    return {
        type: SET_JOB,
        payload: payload
    }
}

export function addTodoItem(payload) {
    return {
        type: ADD_JOB,
        payload: payload
    }
}