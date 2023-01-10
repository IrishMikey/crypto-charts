import React from "react";

const Card = (props) => {
  console.log("props" + JSON.stringify(props.coin.image));
  return (
    <>
      <img className="coinImg" src={props.coin.image} alt="coinImg" />
      <h5 className="coinName">{props.coin.name}</h5>
      <div className="coinData">
        <span className="coinPrice">€{props.coin.current_price}</span>
        {props.coin.price_change_percentage_24h < 0 ? (
          <span className="red coinChange">
            {props.coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        ) : (
          <span className="green coinChange">
            {props.coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        )}
      </div>
    </>
  );
};

export default Card;
