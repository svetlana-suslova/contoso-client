import {combineReducers} from 'redux';
import student from './studentReducer';
import common from './commonReducer';

const rootReducer = combineReducers({student, common});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
