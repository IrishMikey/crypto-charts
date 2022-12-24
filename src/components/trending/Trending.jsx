import React, { useState, useEffect } from "react";
import axios  from "axios";

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

  console.log(data)
  
  if(!data) return null
  console.log()

  return (
    <>
      <h2>Trending</h2>
      <div className="trendingCard">
        <div className="image">
            <img src={data.coins[0].item.thumb} alt="" />
        </div>
        <div>
          <h5>{data.coins[0].item.name}</h5>
          <p>$45,000</p>
        </div>
        <div>
          <p>Arrow</p>
          <p>3.5% </p>
        </div>
      </div>
    </>
  );
};

export default Trending;
