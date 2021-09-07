import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterData, getData } from '../redux/home/home';
import pointer from '../images/assets/pointer.svg';

const Home = () => {
  const data = useSelector((data) => data.detailDataReducer);
  const dispatch = useDispatch();
  const mainArray = ['AAPL', 'FB', 'INTC', 'ORCL', 'NKE', 'PFE', 'NOK', 'TWTR', 'CSCO', 'BABA', 'ATVI', 'FOXA'];
  useEffect(() => {
    dispatch(getData(mainArray));
  }, []);

  const handleClick = (props) => {
    dispatch(filterData(props));
  };

  return (
    <div>
      <div className="Home_Header_1">
        <h1>Cripto Up to date</h1>
        <h2>12 results</h2>
      </div>
      <div className="Home_Header_2">
        <h1>STATS BY COMPANY</h1>
      </div>
      <ul className="home_btns_cont">
        {data.map((e) => (
          <li key={e.Summary.Name}>
            <NavLink onClick={() => { handleClick(e); }} className="home_item_btn" type="button" key={e.Symbol} to="/details">
              <img src={pointer} alt="pointer" className="home_arrows" />
              <h1>{e.Summary.Name}</h1>
              <h2>
                Price US$
                {e.Summary.Price}
              </h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
