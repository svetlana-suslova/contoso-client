import httpHelper from 'helpers/httpHelper';

export default {
  getCourses,
  getCourse,
};

function getCourses(departmentId) {
  return httpHelper.get('/api/course/list', {departmentId});
}

function getCourse(id) {
  return httpHelper.get('/api/course/getCourse', {id});
}
