import {combineReducers} from 'redux';
import student from './studentReducer';

const rootReducer = combineReducers({student});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
