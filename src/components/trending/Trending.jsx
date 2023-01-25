import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Coin from "../../routes/Coin";
import "./Trending.css";
import { NotFound } from "../NotFound";

const Trending = () => {
  const [trending, setTrending] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  // const [prices, setPrices] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";
  // const urlPrice = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur';

  //Get coin id's and make a request to find the EUR price
  // const searchCoin = (data) => {
  //   if (data) {
  //     let idString = "";
  //     let coinIds = data.coins.map((coin) => coin.item.id);
  //     // console.log(coinIds);
  //     for (let index = 0; index < coinIds.length; index++) {
  //       if (index !== coinIds.length - 1) {
  //         idString += coinIds[index] + "%2C";
  //       } else {
  //         idString += coinIds[index];
  //       }
  //     }
  //     // console.log(idString);
  //     const urlPrice =
  //       "https://api.coingecko.com/api/v3/simple/price?ids=" +
  //       idString +
  //       "&vs_currencies=EUR";

  //     const getPrices = async () => {
  //       try {
  //         const resPost = await axios(urlPrice);
  //         // Object.entries(resPost.data).forEach(data => {
  //         //   console.log(JSON.stringify(data))
  //         // });
  //         setPrices(resPost.data);
  //         // console.log(Object.entries(resPost.data));
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     getPrices();
  //     // console.log(prices)
  //   }
  // };

  useEffect(() => {
    const fetchTrending = async () => {
      console.count("fetch : ");
      setLoading(true);
      try {
        const res = await axios(url);
        setTrending(res.data);
        console.log(res.data)
        setLoading(false);
        // searchCoin(res.data);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    fetchTrending();
  }, []);

  if (!trending || error) return <NotFound/>;
  return (
    <div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <section className="trending">
          <h2>Trending</h2>

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
                  {/* <span className="coinPrice">{coin.item.price_btc}</span>
                  {prices ? (
                    <div>
                      <p>tr</p>
                      {/* <p>{prices.filter(price => price)}</p> */}
                    {/* </div> */}
                  {/* ) : ( */}
                    {/* <p>false</p> */}
                  {/* )} */} 
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
