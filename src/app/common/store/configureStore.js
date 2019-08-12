import { createStore } from 'redux';
import { rootReducer } from 'app/common/reducers';

export const store = createStore(rootReducer);
