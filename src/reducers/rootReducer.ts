import {combineReducers} from 'redux';
import student from './studentReducer';
import common from './commonReducer';
import course from './courseReducer';
import department from './departmentReducer';
import instructor from './instructorReducer';
import enrollment from './enrollmentReducer';

const rootReducer = combineReducers({student, common, course, department, instructor, enrollment});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
