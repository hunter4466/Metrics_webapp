import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/home/home';

const Home = () => {
  const data = useSelector((data) => data.homeDataReducer);
  const dispatch = useDispatch();
  const enterprices = ['AAPL', 'FB', 'INTC', 'ORCL', 'NKE', 'PFE', 'NOK', 'TWTR', 'CSCO', 'BABA', 'ATVI', 'FOXA'];
  let dataFetched = false;
  useEffect(() => {
    if (!dataFetched) {
      dataFetched = true;
      enterprices.forEach((e) => {
        dispatch(getData(e));
      });
    }
  }, []);

  return (
    <div>
      <div>
        <h1>Home</h1>
        <div><h1>Financials</h1></div>
      </div>
      {data.map((e) => (
        <button type="button" key={e.symbol}>{e.companyName}</button>
      ))}
    </div>
  );
};

export default Home;
