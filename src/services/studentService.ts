import httpHelper from 'helpers/httpHelper';

export default {
  getStudentsStatistics,
  getStudents,
};

function getStudentsStatistics() {
  return httpHelper.get('/api/student/statistics', {});
}

function getStudents(sortOrder, search, pageNumber, pageSize) {
  let data = {
    sortOrder,
    search,
    pageNumber,
    pageSize,
  };
  return httpHelper.get('/api/student/list', data);
}
