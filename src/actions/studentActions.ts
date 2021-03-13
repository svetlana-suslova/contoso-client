import * as types from '../action_types/actionTypes';
import helper from './actionHelper';
import {getStudentsStatistics} from '../services/studentService';

const loadStudentsStatisticsSuccess = (statistics: Array<any>) =>
  helper.getAction(types.LOAD_STUDENTS_STATISTICS, {statistics});

export const loadStudentsStatistics = () => {
  return helper.dispatchAsyncAction(async (dispatch) => {
    let statistics = await getStudentsStatistics();
    dispatch(loadStudentsStatisticsSuccess(statistics));
  }, null);
};
