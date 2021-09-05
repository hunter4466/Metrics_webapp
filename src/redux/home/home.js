// ------------- DUCK PATH ---------------
const GET_DATA = 'REDUX/HOME/GET_DATA';
const STORE_FETCHED_DATA = 'REDUX/HOME/STORE_FETCHED_DATA';
const CLEAR_FETCHED = 'REDUX/HOME/CLEAR_FETCHED';
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
const clearFetched = () => ({
  type: CLEAR_FETCHED,
});
  // -------------REDUCERS ----------------
const homeDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return state;
    case STORE_FETCHED_DATA:
      return [...state, action.payload];
    case CLEAR_FETCHED:
      return defaultState;
    default:
      return state;
  }
};
  // -------------MIDDLEWARES -------------
const fetchDataMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_DATA) {
    fetch(`https://financialmodelingprep.com/api/v3/profile/${action.payload}?apikey=96544b4b37a6cd1ae6656534647840ef`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => store.dispatch(storeFetchedData(json)));
  }
  next(action);
};
  // ------------- EXPORTS ----------------
export {
  // -------------- ACTIONS ----------------
  getData,
  storeFetchedData,
  clearFetched,
  // -------------REDUCERS ----------------
  homeDataReducer,
  // -------------MIDDLEWARES -------------
  fetchDataMiddleware,
};
