import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterData, getData } from '../redux/home/home';
import pointer from '../images/assets/pointer.svg';

const Home = () => {
  const data = useSelector((data) => data.detailDataReducer);
  const onLoad = useSelector((data) => data.loadingStateReducer);
  const dispatch = useDispatch();
  const mainArray = ['AAPL', 'FB', 'INTC', 'ORCL', 'NKE', 'PFE', 'NOK', 'TWTR', 'CSCO', 'BABA', 'ATVI', 'FOXA'];
  const [filterState, setFilterState] = useState(0);
  useEffect(() => {
    dispatch(getData(mainArray));
  }, []);

  const handleClick = (props) => {
    dispatch(filterData(props));
  };

  const handleChange = () => {
    const filterDis = document.getElementById('filterDisplay');
    setFilterState(filterDis.value);
  };

  return (
    <div>
      <div className="Home_Header_1">
        <h1>Cripto Up to date</h1>
        <h2>12 results</h2>
      </div>
      <div className="Home_Header_2">
        <h1>STATS BY COMPANY</h1>
        <select id="filterDisplay" className="filter" onChange={() => { handleChange(); }}>
          <option disabled selected value="0">Filter by Value</option>
          <option value="0">All</option>
          <option value="50">50+</option>
          <option value="100">100+</option>
          <option value="150">150+</option>
          <option value="200">200+</option>
          <option value="250">250+</option>
        </select>
      </div>
      {onLoad ? (
        <div className="loading_state">
          <h1>Loading</h1>
        </div>
      ) : ' ' }
      <ul className="home_btns_cont">
        {data.map((e) => (
          (e.Summary.Price >= parseInt(filterState, 10))
            ? (
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
            ) : ''

        ))}
      </ul>
    </div>
  );
};

export default Home;
