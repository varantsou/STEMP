import { SET_YEAR } from 'app/common/actions/pageActions';

const initialState = {
    year: 2018,
    photos: []
};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return {
                ...state,
                year: action.payload
            };

        default:
            return state;
    }
}
