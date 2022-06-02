import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants';

export const initialState = {
    job: '',
    jobs: [],
};
const reducer = (state, action) => {
    if (action.type === SET_JOB) {
        const job = action.payload;
        return { ...state, job };
    }

    if (action.type === ADD_JOB) {
        state.jobs.push(state.job);
        state.job = '';
        action.payload.current.focus();
        //return state;// (1)
        return { ...state };
    }

    if (action.type === DELETE_JOB) {
        state.jobs.splice(action.payload, 1);
        return { ...state };
    }
};
export default reducer;
