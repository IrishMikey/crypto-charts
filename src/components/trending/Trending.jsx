import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Trending.css";
const Trending = () => {
  const [data, setData] = useState(null);

  const url = "https://api.coingecko.com/api/v3/search/trending";

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

  console.log(data);

  if (!data) return null;
  console.log();

  return (
    <section className="trending">
      <h2>Trending</h2>

      <div className="trendingCards">
        {data.coins.map((coin) => (
          <div key={coin.item.id} className="trendingCard">
            <h5 className="coinName">{coin.item.name}</h5>
          <img className="coinImg" src={coin.item.small} alt="coinImg" />
<span className="coinPrice">{coin.item.price_btc.toFixed(5)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
