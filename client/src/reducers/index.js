import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import appointmentsReducer from './appointmentsReducer';
import dateReducer from './dateReducer';
import monthReducer from './monthReducer';

export default combineReducers({
    auth: authReducer,
    date: dateReducer,
    showMonth: monthReducer,
    appointments: appointmentsReducer,
    form: reduxForm
});