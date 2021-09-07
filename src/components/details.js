import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTransition, animated } from 'react-spring';

const Details = () => {
  const data = useSelector((data) => data.filteredDataReducer);
  const animationFade = {
    from: { height: 0, opacity: 0, paddingTop: '0vw' },
    enter: { height: 40, opacity: 1, paddingTop: '4vw' },
    leave: { height: 0, opacity: 0, paddingTop: '0vw' },
  };
  const [detailState, setDetailState] = useState(
    {
      MarketCap: { name: 'Market Capital', value: false, currencyIfNeeded: 'US$' },
      Price: { name: 'Price', value: false, currencyIfNeeded: 'US$' },
      PriceEarningsRatio: { name: 'Price Earnings Ratio', value: false, currencyIfNeeded: 'US$' },
      Beta: { name: 'Beta', value: false, currencyIfNeeded: 'US$' },
      AskQuantity: { name: 'Ask Quantity', value: false, currencyIfNeeded: 'US$' },
      Open: { name: 'Open', value: false, currencyIfNeeded: 'US$' },
      YearRangeHigh: { name: 'Year Rank High', value: false, currencyIfNeeded: 'US$' },
      YearRangeLow: { name: 'Year Range Low', value: false, currencyIfNeeded: 'US$' },
      YearTargetEstimate: { name: 'Year Target Estimate', value: false, currencyIfNeeded: 'US$' },
    },
  );
  const transition = [];
  Object.keys(detailState).forEach((e) => {
    transition.push([useTransition(detailState[e].value, animationFade), detailState[e], e]);
  });
  const handleClick = (key) => {
    const objKeys = Object.keys(detailState);
    const state = {};
    objKeys.forEach((e) => {
      state[e] = detailState[e];
    });
    if (detailState[key].value) {
      state[key].value = false;
      setDetailState(state);
    } else {
      state[key].value = true;
      setDetailState(state);
    }
  };
  return (
    <div>
      <div className="detail_container">
        <div className="nameTitle">
          <h1 className="nameTitleText">
            {data.Summary.Name}
          </h1>
          <h2>
            Price US$
            {data.Summary.Price}
          </h2>
        </div>
        <ul className="detailsUl">
          {transition.map((e) => (
            <li className="details_container" key={e[2]}>
              <button type="button" onClick={() => { handleClick(e[2]); }} className="collapse_button">
                {e[1].name}
                {data.Summary.price}
              </button>
              {e[0]((style, item) => (item ? (
                <animated.div style={style} className="collapsed-info">
                  <p className="collapsed-text">
                    {e[1].currencyIfNeeded}
                    {data.Summary[e[2]]}
                  </p>
                </animated.div>
              ) : ''))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
