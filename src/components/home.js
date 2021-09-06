import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getData } from '../redux/home/home';

const Home = () => {
  const data = useSelector((data) => data.homeDataReducer);
  const dispatch = useDispatch();
  const handleClick = (key) => {
    dispatch(getData(key));
  };

  return (
    <div>
      <div>
        <h1>Home</h1>
        <div><h1>Financials</h1></div>
      </div>
      {data.map((e) => (
        <NavLink onClick={() => { handleClick(e.symbol); }} type="button" key={e.symbol} to="/details">{e.name}</NavLink>
      ))}
    </div>
  );
};

export default Home;
