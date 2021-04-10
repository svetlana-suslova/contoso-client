import * as types from 'action_types/departmentsActionTypes';
import helper from './actionHelper';
import service from 'services/departmentService';

const loadDepartmentsSuccess = (departments: Array<Department>) =>
  helper.getAction(types.LOAD_DEPARTMENTS, {departments});

const loadDepartmentSuccess = (department: Department) => helper.getAction(types.LOAD_DEPARTMENT, {department});

const updateDepartmentSuccess = (department: Department) => helper.getAction(types.UPDATE_DEPARTMENT, {department});

const createDepartmentSuccess = (department: Department) => helper.getAction(types.CREATE_DEPARTMENT, {department});

const deleteDepartmentSuccess = (id: number) => helper.getAction(types.DELETE_DEPARTMENT, {id});

export const loadDepartments = () => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let departments = await service.getDepartments();
    dispatch(loadDepartmentsSuccess(departments));
  }, null);
};

export const loadDepartment = (departmentId) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let department = await service.getDepartment(departmentId);
    dispatch(loadDepartmentSuccess(department));
  }, null);
};

export const saveDepartment = (currentDepartment) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let department = await service.saveDepartment(currentDepartment);
    currentDepartment.id
      ? dispatch(updateDepartmentSuccess(department))
      : dispatch(createDepartmentSuccess(department));
  }, null);
};

export const deleteDepartment = (id) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let response = await service.deleteDepartment(id);
    if (response) {
      dispatch(deleteDepartmentSuccess(id));
    }
  }, null);
};
