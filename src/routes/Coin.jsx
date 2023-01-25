import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Coin.css";
import { NotFound } from "../components/NotFound";
import { Link } from "react-router-dom";

import axios from "axios";
function Coin() {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <NotFound />;
  }

  return (
    <div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="coin-container">
          <Link to="/" className="rank">
            <span className="rank-btn">Home</span>
          </Link>

          <div className="content">
            <h1>{coin.name}</h1>
          </div>
          <div className="content">
            <div className="rank">
              <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
            </div>
            <div className="info">
              <div className="coin-heading">
                {coin.image ? <img src={coin.image.small} alt="" /> : null}
                <div className="coinInfo">
                  <p>{coin.name}</p>
                  {coin.symbol ? <p>{coin.symbol.toUpperCase()}/eur</p> : null}
                </div>
              </div>
              <div className="coin-price">
                {coin.market_data?.current_price ? (
                  <h1>
                    €{coin.market_data?.current_price.eur.toLocaleString()}
                  </h1>
                ) : null}
              </div>
            </div>
          </div>

          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_1h_in_currency ? (
                      <div>
                        {coin.market_data?.price_change_percentage_1h_in_currency.eur.toFixed(
                          1
                        ) > 0 ? (
                          <span className="green">
                            {coin.market_data?.price_change_percentage_1h_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        ) : (
                          <span className="red">
                            {coin.market_data?.price_change_percentage_1h_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        )}
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <div>
                        {coin.market_data?.price_change_percentage_24h_in_currency.eur.toFixed(
                          1
                        ) > 0 ? (
                          <span className="green">
                            {coin.market_data?.price_change_percentage_24h_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        ) : (
                          <span className="red">
                            {coin.market_data?.price_change_percentage_24h_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        )}
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <div>
                        {coin.market_data?.price_change_percentage_7d_in_currency.eur.toFixed(
                          1
                        ) > 0 ? (
                          <span className="green">
                            {coin.market_data?.price_change_percentage_7d_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        ) : (
                          <span className="red">
                            {coin.market_data?.price_change_percentage_7d_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        )}
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <div>
                        {coin.market_data?.price_change_percentage_14d_in_currency.eur.toFixed(
                          1
                        ) > 0 ? (
                          <span className="green">
                            {coin.market_data?.price_change_percentage_14d_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        ) : (
                          <span className="red">
                            {coin.market_data?.price_change_percentage_14d_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        )}
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data
                      ?.price_change_percentage_24h_in_currency ? (
                      <div>
                        {coin.market_data?.price_change_percentage_30d_in_currency.eur.toFixed(
                          1
                        ) > 0 ? (
                          <span className="green">
                            {coin.market_data?.price_change_percentage_30d_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        ) : (
                          <span className="red">
                            {coin.market_data?.price_change_percentage_30d_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        )}
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {coin.market_data?.price_change_percentage_1y_in_currency
                      ?.eur ? (
                      <div>
                        {coin.market_data
                          ?.price_change_percentage_1y_in_currency?.eur > 0 ? (
                          <span className="green">
                            {coin.market_data?.price_change_percentage_1y_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        ) : (
                          <span className="red">
                            {coin.market_data?.price_change_percentage_1y_in_currency.eur.toFixed(
                              1
                            )}
                            %
                          </span>
                        )}
                      </div>
                    ) : (
                      <span>N/A</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content">
            <div className="stats">
              <div className="left">
                <div className="row">
                  <h4>24 Hour Low</h4>
                  {coin.market_data?.low_24h ? (
                    <p>€{coin.market_data?.low_24h.eur.toLocaleString()}</p>
                  ) : null}
                </div>
                <div className="row">
                  <h4>24 Hour High</h4>
                  {coin.market_data?.high_24h ? (
                    <p>€{coin.market_data?.high_24h.eur.toLocaleString()}</p>
                  ) : null}{" "}
                </div>
              </div>
              <div className="right">
                <div className="row">
                  <h4>Market Cap</h4>
                  {coin.market_data?.market_cap ? (
                    <p>€{coin.market_data?.market_cap.eur.toLocaleString()}</p>
                  ) : null}
                </div>
                <div className="row">
                  <h4>Circulating Supply</h4>
                  {coin.market_data ? (
                    <p>{coin.market_data?.circulating_supply}</p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            {coin.description ? (
              <div className="about">
                <h3>About</h3>

                <p id="about">{coin.description.en}</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default Coin;
