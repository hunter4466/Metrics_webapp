import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { fetchDataMiddleware, detailDataReducer, filteredDataReducer } from './home/home';

const reducer = combineReducers({
  detailDataReducer,
  filteredDataReducer,
});
const composedEnhancer = compose(
  applyMiddleware(fetchDataMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
