import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Coin from "../../routes/Coin";
import Trending from "../trending/Trending";

import { Link } from "react-router-dom";

import "./Cards.css";
const Cards = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false";

    useEffect(() => {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  

  console.log("data :" + data);
  if (data === null) return null;

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <section>
          <Trending />
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
