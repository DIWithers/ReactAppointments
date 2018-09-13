import axios from 'axios';
import  { FETCH_USER, SELECT_DATE } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateDate = (date) => async dispatch => {
    dispatch({ type: SELECT_DATE, payload: date});
};
