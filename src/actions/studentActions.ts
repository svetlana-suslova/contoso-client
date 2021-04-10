import * as types from 'action_types/studentsActionTypes';
import helper from './actionHelper';
import service from 'services/studentService';

const loadStudentsStatisticsSuccess = (statistics: Array<StatisticsItem>) =>
  helper.getAction(types.LOAD_STUDENTS_STATISTICS, {statistics});

const loadStudentsSuccess = (students: Array<Student>) => helper.getAction(types.LOAD_STUDENTS, {students});

const loadStudentSuccess = (student: Student) => helper.getAction(types.LOAD_STUDENT, {student});

const updateStudentSuccess = (student: Student) => helper.getAction(types.UPDATE_STUDENT, {student});

const createStudentSuccess = (student: Student) => helper.getAction(types.CREATE_STUDENT, {student});

const deleteStudentSuccess = (id: number) => helper.getAction(types.DELETE_STUDENT, {id});

export const loadStudentsStatistics = () => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let statistics = await service.getStudentsStatistics();
    dispatch(loadStudentsStatisticsSuccess(statistics));
  }, null);
};

export const loadStudents = (sortOrder, search, pageNumber, pageSize) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let students = await service.getStudents(sortOrder, search, pageNumber, pageSize);
    dispatch(loadStudentsSuccess(students));
  }, null);
};

export const loadStudent = (id) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let student = await service.getStudent(id);
    dispatch(loadStudentSuccess(student));
  }, null);
};

export const saveStudent = (currentStudent) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let student = await service.saveStudent(currentStudent);
    currentStudent.id ? dispatch(updateStudentSuccess(student)) : dispatch(createStudentSuccess(student));
  }, null);
};

export const deleteStudent = (id) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let response = await service.deleteStudent(id);
    if (response) {
      dispatch(deleteStudentSuccess(id));
    }
  }, null);
};
