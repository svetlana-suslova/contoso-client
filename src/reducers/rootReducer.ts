import {combineReducers} from 'redux';
import student from './studentReducer';
import common from './commonReducer';
import course from './courseReducer';

const rootReducer = combineReducers({student, common, course});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
