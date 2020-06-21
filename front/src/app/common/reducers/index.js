import { combineReducers } from 'redux';

import user from './user';
import page from './page';

export const rootReducer = combineReducers({
    page,
    user
});
