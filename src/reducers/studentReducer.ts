import {LOAD_STUDENTS_STATISTICS} from 'action_types/actionTypes';
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
  });
};

export default studentReducer;
