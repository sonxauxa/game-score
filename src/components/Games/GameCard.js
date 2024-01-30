import React from "react";
import { useNavigate } from "react-router";

const GameCard = ({ item }) => {
  const history = useNavigate();
  return (
    <div
      onClick={() => {
        history(`/games${item.url}`);
      }}
      className={
        "w-[190px] h-[190px] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.07)] rounded-md p-4"
      }
    >
      <div className={"card-header text-2xl font-bold"}>{item.label}</div>
    </div>
  );
};

export default GameCard;
