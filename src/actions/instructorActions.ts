import * as types from 'action_types/instructorsActionTypes';
import helper from './actionHelper';
import service from 'services/instructorService';

const loadInstructorsSuccess = (instructors: Array<Instructor>) =>
  helper.getAction(types.LOAD_INSTRUCTORS, {instructors});

const loadInstructorSuccess = (instructor: Instructor) => helper.getAction(types.LOAD_INSTRUCTOR, {instructor});

const updateInstructorSuccess = (instructor: Instructor) => helper.getAction(types.UPDATE_INSTRUCTOR, {instructor});

const createInstructorSuccess = (instructor: Instructor) => helper.getAction(types.CREATE_INSTRUCTOR, {instructor});

const deleteInstructorSuccess = (id: number) => helper.getAction(types.DELETE_INSTRUCTOR, {id});

export const loadInstructors = () => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let instructors = await service.getInstructors();
    dispatch(loadInstructorsSuccess(instructors));
  }, null);
};

export const loadInstructor = (id) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let instructor = await service.getInstructor(id);
    dispatch(loadInstructorSuccess(instructor));
  }, null);
};

export const saveInstructor = (currentInstructor) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let instructor = await service.saveInstructor(currentInstructor);
    instructor.id ? dispatch(updateInstructorSuccess(instructor)) : dispatch(createInstructorSuccess(instructor));
  }, null);
};

export const deleteInstructor = (id) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let response = await service.deleteInstructor(id);
    if (response) {
      dispatch(deleteInstructorSuccess(id));
    }
  }, null);
};
