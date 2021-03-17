import {format, parseISO} from 'date-fns';

export default {
  displayDate,
  displayCurrentYear,
};

function displayDate(date, displayFormat = 'MM/dd/yyyy') {
  return format(parseISO(date), displayFormat);
}

function displayCurrentYear() {
  return new Date().getFullYear();
}
