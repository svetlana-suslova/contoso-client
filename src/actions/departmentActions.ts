import * as types from 'action_types/departmentsActionTypes';
import helper from './actionHelper';
import service from 'services/departmentService';

const loadDepartmentsSuccess = (departments: Array<any>) => helper.getAction(types.LOAD_DEPARTMENTS, {departments});

export const loadDepartments = () => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let departments = await service.getDepartments();
    dispatch(loadDepartmentsSuccess(departments));
  }, null);
};
