import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { fetchDataMiddleware, homeDataReducer } from './home/home';

const reducer = combineReducers({
  homeDataReducer,
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
