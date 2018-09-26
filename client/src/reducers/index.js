import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import dateReducer from './dateReducer';
import meridianReducer from './meridianReducer';

export default combineReducers({
    auth: authReducer,
    date: dateReducer,
    form: reduxForm,
    meridian: meridianReducer
});