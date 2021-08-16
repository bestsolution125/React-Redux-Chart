import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { routeReducer } from 'react-router-redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension's options like name, actionsBlacklist, actionsCreators, serialise...
  }) : compose;
const store = createStore(
  combineReducers({
    ...reducers,
    router: routeReducer,
  }),
  composeEnhancers(applyMiddleware(...middlewares, logger))
);
sagaMiddleware.run(rootSaga);
export default store;
