import React, { useState } from "react";
import PlayerIcon from "src/components/Player/PlayerIcon";
import AddPlayer from "src/components/Player/AddPlayer";

const PlayerGroup = () => {
  const [players, setPlayers] = useState([{ name: "Me", id: "1" }]);
  return (
    <div className={"flex items-center gap-1 p-2 bg-[#ffe082] rounded-3xl"}>
      {players.map((player) => {
        return <PlayerIcon key={player.id} />;
      })}
      <AddPlayer setPlayers={setPlayers} />
    </div>
  );
};

export default PlayerGroup;
