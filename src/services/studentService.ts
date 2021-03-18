import httpHelper from 'helpers/httpHelper';

export default {
  getStudentsStatistics,
  getStudents,
};

function getStudentsStatistics() {
  return httpHelper.get('/api/student/statistics', {});
}

function getStudents(sortOrder, pageNumber, pageSize) {
  let data = {
    sortOrder,
    pageNumber,
    pageSize,
  };
  return httpHelper.get('/api/student/list', data);
}
