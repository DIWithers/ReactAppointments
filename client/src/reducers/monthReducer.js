import { SHOW_FULL_MONTH } from '../actions/types';

export default function (state = true, action) {
    console.log(action);
    switch (action.type) {
        case SHOW_FULL_MONTH:
            return action.payload;
        default:
            return state;
    }
}