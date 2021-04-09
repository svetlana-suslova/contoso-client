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
    [types.UPDATE_COURSE](state, payload) {
      let newList = [...state.list.filter((course) => course.id !== payload.course.id), {...payload.course}];
      state.list = newList;
    },
    [types.CREATE_COURSE](state, payload) {
      let newList = [...state.list, {...payload.course}];
      state.list = newList;
    },
    [types.DELETE_COURSE](state, payload) {
      let newList = [...state.list.filter((course) => course.id !== payload.course.id)];
      state.list = newList;
    },
  });
};

export default studentReducer;
