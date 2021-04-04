import * as types from 'action_types/coursesActionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

const studentReducer = (state = initialState.course, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_COURSES](state, payload) {
      state.list = payload.courses;
    },
  });
};

export default studentReducer;
