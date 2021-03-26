import {format, parseISO} from 'date-fns';
import config from './configHelper';

export default {
  displayDate,
  displayCurrentYear,
  getCurrentDate,
};

function displayDate(date, displayFormat = config.format.date) {
  let num: any = 1;
  return format(parseISO(date, num), displayFormat);
}

function displayCurrentYear(displayFormat = config.format.year) {
  return format(parseISO(getCurrentDate()), displayFormat);
}

function getCurrentDate() {
  return new Date().toISOString();
}
