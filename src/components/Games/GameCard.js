import React from "react";

const GameCard = ({ item }) => {
  return (
    <div
      className={
        "w-[150px] h-[150px] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.07)] rounded-md p-4"
      }
    >
      <div className={"card-header text-2xl font-bold"}>card {item}</div>
      <div>{item}</div>
    </div>
  );
};

export default GameCard;
