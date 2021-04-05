import * as types from 'action_types/departmentsActionTypes';
import helper from './reducerHelper';
import initialState from './initialState';

const departmentReducer = (state = initialState.department, action) => {
  return helper.handleActions(state, action, {
    [types.LOAD_DEPARTMENTS](state, payload) {
      state.list = payload.departments;
    },
  });
};

export default departmentReducer;
