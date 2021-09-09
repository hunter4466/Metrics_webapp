import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import {
  fetchDataMiddleware,
  detailDataReducer,
  filteredDataReducer,
  loadingStateReducer,
  loadingChangeStateMiddleware,
  filterStateReducer,
} from './home/home';

const reducer = combineReducers({
  detailDataReducer,
  filteredDataReducer,
  loadingStateReducer,
  filterStateReducer,
});
const composedEnhancer = compose(
  applyMiddleware(fetchDataMiddleware),
  applyMiddleware(loadingChangeStateMiddleware),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
