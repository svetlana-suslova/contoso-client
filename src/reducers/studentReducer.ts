import * as types from 'action_types/actionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

type StudentState = {
  statisticsList: StatisticsItem[];
};

const studentReducer = (state: StudentState = initialState.student, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_STUDENTS_STATISTICS](state, payload) {
      state.statisticsList = payload.statistics;
    },
    [types.LOAD_STUDENTS](state, payload) {
      state.list = payload.students;
    },
    [types.COUNT_STUDENTS](state, payload) {
      state.totalCount = payload.count;
    },
    [types.LOAD_STUDENT](state, payload) {
      state.current = payload.student;
    },
    [types.UPDATE_STUDENT](state, payload) {
      let newList = [...state.list.filter((student) => student.id !== payload.student.id), {...payload.student}];
      state.list = newList;
    },
    [types.CREATE_STUDENT](state, payload) {
      let newList = [...state.list, {...payload.student}];
      state.list = newList;
    },
  });
};

export default studentReducer;
