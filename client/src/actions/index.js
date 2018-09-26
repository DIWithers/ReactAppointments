import axios from 'axios';
import  { FETCH_USER, SELECT_DATE, UPDATE_MERIDIAN } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateDate = (date) => async dispatch => {
    console.log(date);
    dispatch({ type: SELECT_DATE, payload: date});
};

export const updateMeridian = (meridian) => async dispatch => {
    console.log(meridian);
    dispatch({ type: UPDATE_MERIDIAN, payload: meridian});
};

export const submitAppointment = (values) => async dispatch => {
    const res = await axios.post('/api/appointments', values);
    console.log(res.data);
    // Create FETCH_APPT instead to update user's appointments
    // dispatch({ type: FETCH_USER, payload: res.data});
};
