// ------------- DUCK PATH ---------------
const GET_DATA = 'REDUX/HOME/GET_DATA';
const STORE_FETCHED_DATA = 'REDUX/HOME/STORE_FETCHED_DATA';
const FILTER_DATA = 'REDUX/HOME/FILTER_DATA';
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
  // -------------MIDDLEWARES -------------
const fetchDataMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_DATA) {
    Promise.all(
      action.payload.map((e) => (
        fetch(`https://api.aletheiaapi.com/StockData?symbol=${e}&summary=true`, {
          headers: {
            key: '044854F9473A42AC856A0D007FB5D93F',
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((response) => response.json())
      )),
    ).then((data) => store.dispatch(storeFetchedData(data)));
  }
  next(action);
};
  // ------------- EXPORTS ----------------
export {
  // -------------- ACTIONS ----------------
  getData,
  storeFetchedData,
  filterData,
  // -------------REDUCERS ----------------
  detailDataReducer,
  filteredDataReducer,
  // -------------MIDDLEWARES -------------
  fetchDataMiddleware,
};
