import httpHelper from 'helpers/httpHelper';

export default {
  getCourses,
};

function getCourses(departmentId) {
  return httpHelper.get('/api/course/list', {departmentId});
}
