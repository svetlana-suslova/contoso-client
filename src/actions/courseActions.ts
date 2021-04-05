import * as types from 'action_types/coursesActionTypes';
import helper from './actionHelper';
import service from 'services/courseService';

const loadCoursesSuccess = (courses: Array<any>) => helper.getAction(types.LOAD_COURSES, {courses});
const loadCourseSuccess = (course) => helper.getAction(types.LOAD_COURSE, {course});

export const loadCourses = (departmentId) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let courses = await service.getCourses(departmentId);
    dispatch(loadCoursesSuccess(courses));
  }, null);
};

export const loadCourse = (courseId) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let course = await service.getCourse(courseId);
    dispatch(loadCourseSuccess(course));
  }, null);
};
