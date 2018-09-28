import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import dateReducer from './dateReducer';
import appointmentsReducer from './appointmentsReducer';

export default combineReducers({
    auth: authReducer,
    date: dateReducer,
    appointments: appointmentsReducer,
    form: reduxForm
});