import * as types from 'action_types/enrollmentsActionTypes';
import helper from './actionHelper';
import service from 'services/enrollmentService';

const loadEnrollmentsSuccess = (enrollments: Array<Enrollment>) =>
  helper.getAction(types.LOAD_ENROLLMENTS, {enrollments});

export const loadEnrollments = (courseId) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let enrollments = await service.getEnrollments(courseId);
    dispatch(loadEnrollmentsSuccess(enrollments));
  }, null);
};
