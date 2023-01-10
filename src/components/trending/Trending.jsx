import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Trending.css";
const Trending = () => {
  const [trending, setTrending] = useState(null);
  const [prices, setPrices] = useState(null);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const getTrending = async () => {
      try {
        const resPost = await axios(url);
        console.log(resPost.data);
        setTrending(resPost.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTrending()
  }, []);
  console.log(trending);

  //Get coin id's and make a request to find the EUR price
  let coinIds = trending.coin.map((coin) => coin.item.id);
  console.log(coinIds);

  let idString = "";
  for (let index = 0; index < coinIds.length; index++) {
    if (index !== coinIds.length - 1) {
      idString += coinIds[index] + "%2C";
    } else {
      idString += coinIds[index];
    }
  }
  console.log(idString);

  const urlPrice =
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
    idString +
    "&vs_currencies=EUR";

    useEffect(() => {
      const getPrices = async () => {
        try {
          const resPost = await axios(url);
          console.log(resPost.data);
          setPrices(resPost.data);
        } catch (error) {
          console.error(error);
        }
      };
      getPrices()
    }, []);
    console.log(prices);

  if (!trending) return null;

  return (
    <section className="trending">
      <h2>Trending</h2>
      {/* 
      {/* <div className="trendingCards">
        {trending.coins.map((coin) => (
          <div key={coin.item.id} className="trendingCard">
            <h5 className="coinName">{coin.item.name}</h5>
            <img className="coinImg" src={coin.item.small} alt="coinImg" />
            {/* <span className="coinPrice">{coin.item.price_btc.toFixed(5)}</span> 
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Trending;
