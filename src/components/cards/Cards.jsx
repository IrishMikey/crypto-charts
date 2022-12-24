import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Cards.css";
const Cards = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  return (
    <main className="container">
      <div className="listHeader">
        <p>Coin</p>
        <div>
          <p>Price</p>
          <p>24hr</p>
        </div>
      </div>
      {data.map((coin) => (
        <div className="card" key={coin.name}>
          <img className="coinImg" src={coin.image} alt="coinImg" />
          <h5 className="coinName">{coin.name}</h5>
          <div className="coinData">
            <span className="coinPrice">€{coin.current_price}</span>
            {coin.price_change_percentage_24h < 0 ? (
              <span className="red coinChange">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green coinChange">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      ))}
    </main>
  );
};
export default Cards;
