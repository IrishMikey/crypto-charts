import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Coin from "../../routes/Coin";
import "./Trending.css";

const Trending = () => {
  const [trending, setTrending] = useState(null);
  const [loading, setLoading] = useState(false);

  // const [error, setError] = useState(null);
  // const [prices, setPrices] = useState(null);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    const getTrending = async () => {
      setLoading(true);
      try {
        const resPost = await axios.get(url);
        setTrending(resPost.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getTrending();
  }, []);

  // console.log("Trending[] :" + trending)
  //Get coin id's and make a request to find the EUR price
  // let coinIds = trending.coins.map((coin) => coin.item.id);

  // let idString = "";
  // for (let index = 0; index < coinIds.length; index++) {
  //   if (index !== coinIds.length - 1) {
  //     idString += coinIds[index] + "%2C";
  //   } else {
  //     idString += coinIds[index];
  //   }
  // }

  // const urlPrice =
  //   "https://api.coingecko.com/api/v3/simple/price?ids=" +
  //   idString +
  //   "&vs_currencies=EUR";

  //   useEffect(() => {
  //     const getPrices = async () => {
  //       try {
  //         const resPost = await axios(urlPrice);
  //         setPrices(resPost.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     getPrices()
  //   }, []);
  //   console.log(prices);

  if (!trending) return null;

  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <section className="trending">
            <h2  >Trending</h2>
        
          <div className="trendingCards">
            {trending.coins.map((coin) => (
              <Link
                to={`/coin/${coin.item.id}`}
                element={<Coin />}
                key={coin.item.id}
              >
                <div className="trendingCard">
                  <div className="cardRowA">
                    <img
                      className="coinImg"
                      src={coin.item.small}
                      alt="coinImg"
                    />
                    <h5 className="coinName">{coin.item.name}</h5>
                  </div>
                  <span className="coinPrice">
                    {coin.item.price_btc.toFixed(5)}
                  </span>
                  {/* {prices.filter(price => price.includes(coin.name)).map(filteredCoin => (
            <p>{filteredCoin}</p>
          ))}  */}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Trending;
