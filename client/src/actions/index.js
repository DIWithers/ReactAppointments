import axios from 'axios';
import  { FETCH_USER, SELECT_DATE, FETCH_APPOINTMENTS, SHOW_FULL_MONTH } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAppointments = () => async dispatch => {
    const res = await axios.get('/api/appointments');
    dispatch({ type: FETCH_APPOINTMENTS, payload: res.data });
}

export const updateDate = (date) => async dispatch => {
    dispatch({ type: SELECT_DATE, payload: date});
};

export const showFullMonth = (shouldShow) =>  async dispatch => {
    dispatch({ type: SHOW_FULL_MONTH, payload: shouldShow});
}

export const submitAppointment = (values) => async dispatch => {
    const res = await axios.post('/api/appointments', values);
    dispatch({ type: FETCH_USER, payload: res.data });
    // Create FETCH_APPT instead to update user's appointments
};
