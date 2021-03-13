import {asyncActionStart, asyncActionEnd} from './commonActions';

export default {
  dispatchAsyncAction,
  getAction,
};

const defaultOptions = {
  throwError: false,
  showOverlay: true,
};

const getOptions = (options) => {
  if (!options) return defaultOptions;

  return {
    ...defaultOptions,
    ...options,
  };
};

function dispatchAsyncAction(action, options) {
  options = getOptions(options);

  return async (dispatch, getState) => {
    try {
      dispatch(asyncActionStart(options.showOverlay));

      let result = await action(dispatch, getState);

      dispatch(asyncActionEnd());

      if (!result) return null;

      return result;
    } catch (error) {
      dispatch(asyncActionEnd());
      if (options.throwError) throw error;
    }
  };
}

function getAction(type: string, payload: object) {
  if (!type) throw new Error('Specify action type');

  return {
    type,
    payload,
  };
}
