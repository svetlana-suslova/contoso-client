import {ASYNC_ACTION_START, ASYNC_ACTION_END} from '../action_types/actionTypes';

import helper from './actionHelper';

export const asyncActionStart = (showOverlay: boolean) => helper.getAction(ASYNC_ACTION_START, {showOverlay});

export const asyncActionEnd = () => helper.getAction(ASYNC_ACTION_END, {});
