import React from "react";

const GameCard = ({ item }) => {
  return (
    <div
      className={
        "w-[190px] h-[190px] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.07)] rounded-md p-4"
      }
    >
      <div className={"card-header text-2xl font-bold"}>{item}</div>
    </div>
  );
};

export default GameCard;
