import {combineReducers} from 'redux';
import student from './studentReducer';
import common from './commonReducer';
import course from './courseReducer';
import department from './departmentReducer';

const rootReducer = combineReducers({student, common, course, department});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
