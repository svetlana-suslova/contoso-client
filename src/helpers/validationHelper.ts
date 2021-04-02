import {isEmpty} from 'lodash';

export default {
  isEmptyErrorObject,
};

function isEmptyErrorObject(obj) {
  let isEmptyObject = true;

  for (let key of Object.keys(obj)) {
    let value = obj[key];

    if (!isEmpty(value)) {
      isEmptyObject = false;
      break;
    }
  }

  return isEmptyObject;
}
