import * as types from 'action_types/instructorsActionTypes';
import helper from './actionHelper';
import service from 'services/instructorService';

const loadInstructorsSuccess = (instructors: Array<Instructor>) =>
  helper.getAction(types.LOAD_INSTRUCTORS, {instructors});

export const loadInstructors = () => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let instructors = await service.getInstructors();
    dispatch(loadInstructorsSuccess(instructors));
  }, null);
};
