import httpHelper from 'helpers/httpHelper';

export default {
  getDepartments,
};

function getDepartments() {
  return httpHelper.get('/api/department/list', {});
}
