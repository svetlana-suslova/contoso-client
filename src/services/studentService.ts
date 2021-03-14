import httpHelper from '../helpers/httpHelper';

export function getStudentsStatistics() {
  return httpHelper.get('/api/student/statistics', {});
}
