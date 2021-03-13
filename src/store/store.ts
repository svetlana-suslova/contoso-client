import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';

const enhancers: any = [];
const middleware = [thunk];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const configureStore = (persistedState?) => createStore(rootReducer, persistedState, composedEnhancers);

export default configureStore;
