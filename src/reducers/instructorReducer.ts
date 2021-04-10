import * as types from 'action_types/instructorsActionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

const instructorReducer = (state = initialState.instructor, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_INSTRUCTORS](state, payload) {
      state.list = payload.instructors;
    },
  });
};

export default instructorReducer;
