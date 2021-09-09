// ------------- DUCK PATH ---------------
const GET_DATA = 'REDUX/HOME/GET_DATA';
const STORE_FETCHED_DATA = 'REDUX/HOME/STORE_FETCHED_DATA';
const FILTER_DATA = 'REDUX/HOME/FILTER_DATA';
const CHANGE_LOAD_STATE = 'REDUX/HOME/CHANGE_LOAD_STATE';
const SWITCH_FILTER_STATE = 'REDUX/HOME/SWITCH_FILTER_STATE';
// -------------- DEFAUL STATE -----------
const defaultState = [];
// -------------- ACTIONS ----------------
const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
const storeFetchedData = (payload) => ({
  type: STORE_FETCHED_DATA,
  payload,
});
const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});
const changeLoadingState = (payload) => ({
  type: CHANGE_LOAD_STATE,
  payload,
});
const switchFilterState = (payload) => ({
  type: SWITCH_FILTER_STATE,
  payload,
});
  // -------------REDUCERS ----------------
const detailDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return state;
    case STORE_FETCHED_DATA:
      return action.payload;
    default:
      return state;
  }
};
const filteredDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_DATA:
      return action.payload;
    default:
      return state;
  }
};
const loadingStateReducer = (state = true, action) => {
  switch (action.type) {
    case CHANGE_LOAD_STATE:
      return action.payload;
    default:
      return state;
  }
};
const filterStateReducer = (state = { state: '0' }, action) => {
  switch (action.type) {
    case SWITCH_FILTER_STATE:
      return { state: action.payload };
    default:
      return state;
  }
};
  // -------------MIDDLEWARES -------------
const fetchData = async (params) => (fetch(`https://api.aletheiaapi.com/StockData?symbol=${params}&summary=true`, {
  headers: {
    key: '044854F9473A42AC856A0D007FB5D93F',
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.json()));

const fetchDataMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_DATA) {
    Promise.all(
      action.payload.map((e) => (
        fetchData(e)
      )),
    ).then((data) => store.dispatch(storeFetchedData(data)));
  }
  next(action);
};
const loadingChangeStateMiddleware = (store) => (next) => (action) => {
  if (action.type === STORE_FETCHED_DATA) {
    store.dispatch(changeLoadingState(false));
  }
  next(action);
};
  // ------------- EXPORTS ----------------
export {
  // -------------- FUNCTIONS --------------
  fetchData,
  // -------------- ACTIONS ----------------
  getData,
  storeFetchedData,
  filterData,
  switchFilterState,
  // -------------REDUCERS ----------------
  detailDataReducer,
  filteredDataReducer,
  loadingStateReducer,
  filterStateReducer,
  // -------------MIDDLEWARES -------------
  fetchDataMiddleware,
  loadingChangeStateMiddleware,
};
