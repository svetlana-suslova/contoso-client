import * as types from 'action_types/coursesActionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

const studentReducer = (state = initialState.course, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_COURSES](state, payload) {
      state.list = payload.courses;
    },
    [types.LOAD_COURSE](state, payload) {
      state.current = payload.course;
    },
  });
};

export default studentReducer;
