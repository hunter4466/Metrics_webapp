// ------------- DUCK PATH ---------------
const GET_DATA = 'REDUX/HOME/GET_DATA';
const STORE_FETCHED_DATA = 'REDUX/HOME/STORE_FETCHED_DATA';
// -------------- DEFAUL STATE -----------
const defaultState = [
  { name: 'Apple', symbol: 'AAPL' },
  { name: 'Facebook', symbol: 'FB' },
  { name: 'Intel', symbol: 'INTC' },
  { name: 'Oracle', symbol: 'ORCL' },
  { name: 'Nike', symbol: 'NKE' },
  { name: 'Pfizer', symbol: 'PFE' },
  { name: 'Nokia', symbol: 'NOK' },
  { name: 'Twitter', symbol: 'TWTR' },
  { name: 'Cisco', symbol: 'CSCO' },
  { name: 'Ali baba', symbol: 'BABA' },
  { name: 'Activision Blizzard', symbol: 'ATVI' },
  { name: 'Fox', symbol: 'FOXA' },
];
// -------------- ACTIONS ----------------
const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
const storeFetchedData = (payload) => ({
  type: STORE_FETCHED_DATA,
  payload,
});
  // -------------REDUCERS ----------------
const homeDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const detailDataReducer = (state = defaultState, action) => {
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
  // -------------REDUCERS ----------------
  homeDataReducer,
  detailDataReducer,
  // -------------MIDDLEWARES -------------
  fetchDataMiddleware,
};
