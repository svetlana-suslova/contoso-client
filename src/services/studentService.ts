import httpHelper from 'helpers/httpHelper';

export default {
  getStudentsStatistics,
};

function getStudentsStatistics() {
  return httpHelper.get('/api/student/statistics', {});
}
