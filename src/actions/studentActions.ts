import * as types from 'action_types/actionTypes';
import helper from './actionHelper';
import service from 'services/studentService';

const loadStudentsStatisticsSuccess = (statistics: Array<any>) =>
  helper.getAction(types.LOAD_STUDENTS_STATISTICS, {statistics});

const loadStudentsSuccess = (students: Array<any>) => helper.getAction(types.LOAD_STUDENTS, {students});

const countStudentsSuccess = (count: number) => helper.getAction(types.COUNT_STUDENTS, {count});

const loadStudentSuccess = (student: Array<any>) => helper.getAction(types.LOAD_STUDENT, {student});

export const loadStudentsStatistics = () => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let statistics = await service.getStudentsStatistics();
    dispatch(loadStudentsStatisticsSuccess(statistics));
  }, null);
};

export const loadStudents = (sortOrder, search, pageNumber, pageSize) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let students = await service.getStudents(sortOrder, search, pageNumber, pageSize);
    dispatch(loadStudentsSuccess(students.rows));
    dispatch(countStudentsSuccess(students.count));
  }, null);
};

export const loadStudent = (id) => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let student = await service.getStudent(id);
    dispatch(loadStudentSuccess(student));
  }, null);
};
