import * as types from 'action_types/coursesActionTypes';
import helper from './actionHelper';
import service from 'services/courseService';

const loadCoursesSuccess = (courses: Array<any>) => helper.getAction(types.LOAD_COURSES, {courses});

const loadCourseSuccess = (course) => helper.getAction(types.LOAD_COURSE, {course});

const updateCourseSuccess = (course) => helper.getAction(types.UPDATE_COURSE, {course});

const createCourseSuccess = (course) => helper.getAction(types.CREATE_COURSE, {course});

const deleteCourseSuccess = (id) => helper.getAction(types.DELETE_COURSE, {id});

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

export const saveCourse = (currentCourse) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let course = await service.saveCourse(currentCourse);
    currentCourse.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
  }, null);
};

export const deleteCourse = (id) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let response = await service.deleteCourse(id);
    if (response) {
      dispatch(deleteCourseSuccess(id));
    }
  }, null);
};
