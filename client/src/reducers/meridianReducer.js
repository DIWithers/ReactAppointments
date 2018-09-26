import { UPDATE_MERIDIAN } from '../actions/types';

export default function (state = "am", action) {
    switch (action.type) {
        case UPDATE_MERIDIAN:
            return action.payload;
        default:
            return state;
    }
}