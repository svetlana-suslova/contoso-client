import httpHelper from 'helpers/httpHelper';

export default {
  getStudentsStatistics,
  getStudents,
};

function getStudentsStatistics() {
  return httpHelper.get('/api/student/statistics', {});
}

function getStudents() {
  return httpHelper.get('/api/student/list?pageNumber=1&pageSize=100', {});
}
