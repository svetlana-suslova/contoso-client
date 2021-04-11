import * as types from 'action_types/enrollmentsActionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

const enrollmentReducer = (state = initialState.enrollment, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_ENROLLMENTS](state, payload) {
      state.list = payload.enrollments;
    },
  });
};

export default enrollmentReducer;
