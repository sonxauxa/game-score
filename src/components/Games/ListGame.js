import React from "react";
import GameCard from "src/components/Games/GameCard";

const ListGame = () => {
  return (
    <div className={"flex align-middle gap-2 "}>
      {[1, 2, 34, 5, 6].map((item) => {
        return <GameCard item={item} />;
      })}
    </div>
  );
};

export default ListGame;
