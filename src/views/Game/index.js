import React from "react";
import TotalScore from "src/components/Games/TotalScore";
import FirstSecondThird from "src/views/Game/FirstSecondThird/index";
import { useParams } from "react-router-dom";
import {
  GAME_FIRST_SECOND_THIRD,
  GAME_SCORE_MANUAL,
  GAME_TAKE_ALL,
  GAME_TWENTY_ONE,
} from "src/constants/game";
import BlackJack from "src/views/Game/BlackJack/index";
import ScoreManual from "src/views/Game/ScoreManual/index";
import TakeAll from "src/views/Game/TakeAll/TakeAll";
import PlayerGroup from "src/components/Games/PlayerGroup";

const GameView = () => {
  let { gameType } = useParams();

  return (
    <div className={"container m-auto h-full overflow-hidden"}>
      <div className={"absolute right-3 top-4"}>
        <PlayerGroup />
      </div>
      <div className={"grid grid-cols-1 h-full"}>
        <div />
        <div className={"w-full"}>
          <div
            className={
              "grid grid-cols-2 gap-8 m-auto place-content-center place-items-stretch"
            }
          >
            <TotalScore />

            <div className={"grow flex align-top"}>
              {gameType === GAME_FIRST_SECOND_THIRD && <FirstSecondThird />}
              {gameType === GAME_TWENTY_ONE && <BlackJack />}
              {gameType === GAME_SCORE_MANUAL && <ScoreManual />}
              {gameType === GAME_TAKE_ALL && <TakeAll />}
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default GameView;
