import httpHelper from 'helpers/httpHelper';

export default {
  getInstructors,
};

function getInstructors() {
  return httpHelper.get('/api/instructor/list', {});
}
