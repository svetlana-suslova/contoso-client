import {format, parseISO} from 'date-fns';

export function displayDate(date, displayFormat = 'MM/dd/yyyy') {
  return format(parseISO(date), displayFormat);
}

export function displayCurrentYear() {
  return new Date().getFullYear();
}
