import httpHelper from 'helpers/httpHelper';

export default {
  getStudentsStatistics,
  getStudents,
  getStudent,
  saveStudent,
  deleteStudent,
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

function getStudent(id) {
  return httpHelper.get('/api/student/getStudent', {id});
}

function saveStudent(student) {
  return httpHelper.post('/api/student/save', {student});
}

function deleteStudent(id) {
  return httpHelper.delete(`/api/student/delete/${id}`);
}
