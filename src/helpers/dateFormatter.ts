import moment from 'moment';

export default {
  formatDate,
  displayCurrentYear,
};

function formatDate(dateStr) {
  if (!dateStr) dateStr = getCurrentDate();

  return moment(dateStr).format('MM/DD/YYYY');
}

function displayCurrentYear() {
  return moment().format('YYYY');
}

function getCurrentDate() {
  let now = new Date();
  return now.toISOString();
}
