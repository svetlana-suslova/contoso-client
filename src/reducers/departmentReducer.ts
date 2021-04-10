import * as types from 'action_types/departmentsActionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

const departmentReducer = (state = initialState.department, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_DEPARTMENTS](state, payload) {
      state.list = payload.departments;
    },
    [types.LOAD_DEPARTMENT](state, payload) {
      state.current = payload.department;
    },
    [types.UPDATE_DEPARTMENT](state, payload) {
      let newList = [
        ...state.list.filter((department) => department.id !== payload.department.id),
        {...payload.department},
      ];
      state.list = newList;
    },
    [types.CREATE_DEPARTMENT](state, payload) {
      let newList = [...state.list, {...payload.department}];
      state.list = newList;
    },
    [types.DELETE_DEPARTMENT](state, payload) {
      let newList = [...state.list.filter((department) => department.id !== payload.department.id)];
      state.list = newList;
    },
  });
};

export default departmentReducer;
