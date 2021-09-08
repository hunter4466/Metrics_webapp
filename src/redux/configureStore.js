import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import {
  fetchDataMiddleware,
  detailDataReducer,
  filteredDataReducer,
  loadingStateReducer,
  loadingChangeStateMiddleware,
} from './home/home';

const reducer = combineReducers({
  detailDataReducer,
  filteredDataReducer,
  loadingStateReducer,
});
const composedEnhancer = compose(
  applyMiddleware(fetchDataMiddleware),
  applyMiddleware(loadingChangeStateMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
