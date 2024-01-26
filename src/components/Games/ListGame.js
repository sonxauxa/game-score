import React from "react";
import GameCard from "src/components/Games/GameCard";

const ListGame = () => {
  return (
    <div className={"container mx-auto h-screen"}>
      <div className={"flex justify-center flex-col h-full"}>
        <div className={"flex align-middle gap-12 justify-center flex-wrap"}>
          {[1, 2, 34, 5, 6].map((item) => {
            return <GameCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ListGame;
