import {LOAD_STUDENTS_STATISTICS, LOAD_STUDENTS, COUNT_STUDENTS} from 'action_types/actionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

type StudentState = {
  statisticsList: StatisticsItem[];
};

const studentReducer = (state: StudentState = initialState.student, action) => {
  return helper.handleActions(state, action, {
    [LOAD_STUDENTS_STATISTICS](state, payload) {
      state.statisticsList = payload.statistics;
    },
    [LOAD_STUDENTS](state, payload) {
      state.list = payload.students;
    },
    [COUNT_STUDENTS](state, payload) {
      state.totalCount = payload.count;
    },
  });
};

export default studentReducer;
