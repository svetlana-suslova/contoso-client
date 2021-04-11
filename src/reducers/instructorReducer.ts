import * as types from 'action_types/instructorsActionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

const instructorReducer = (state = initialState.instructor, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_INSTRUCTORS](state, payload) {
      state.list = payload.instructors;
    },
    [types.LOAD_INSTRUCTOR](state, payload) {
      state.current = payload.instructor;
    },
    [types.UPDATE_INSTRUCTOR](state, payload) {
      let newList = [
        ...state.list.filter((instructor) => instructor.id !== payload.instructor.id),
        {...payload.instructor},
      ];
      state.list = newList;
    },
    [types.CREATE_INSTRUCTOR](state, payload) {
      let newList = [...state.list, {...payload.instructor}];
      state.list = newList;
    },
    [types.DELETE_INSTRUCTOR](state, payload) {
      let newList = [...state.list.filter((instructor) => instructor.id !== payload.instructor.id)];
      state.list = newList;
    },
  });
};

export default instructorReducer;
