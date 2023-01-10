import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Coin from "../../routes/Coin";
import { Link } from "react-router-dom";

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

  console.log("data :" + data);
  if (data === null) return null;

  return (
    <>
      {data && data.length > 0 && (
        <section>
          <div className="listHeader">
            <p>Top Coins</p>
            <div>
              <p>Price</p>
              <p>24hr</p>
            </div>
          </div>
          <div>
            {data.map((coin) => (
              <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                <div className="card">
                  <Card coin={coin} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Cards;
