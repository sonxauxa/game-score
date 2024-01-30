import React from "react";
import GameCard from "src/components/Games/GameCard";
import { GAME_LIST } from "src/constants/game";

// {label id url}
const ListGame = () => {
  return (
    <div className={"container mx-auto h-full"}>
      <div className={"flex justify-center flex-col h-full"}>
        <div className={"flex align-middle gap-12 justify-center flex-wrap"}>
          {GAME_LIST.map((item) => {
            return <GameCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ListGame;
