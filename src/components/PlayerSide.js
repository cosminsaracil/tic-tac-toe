import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/gameSlice";

function PlayerSide({ player }) {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const dispatch = useDispatch();

  return (
    <div className={`player-side player-${player}`}>
      <h2>Player {player}</h2>
      <button
        onClick={() => dispatch(resetGame())}
        disabled={currentPlayer !== player}
      >
        Reset Game
      </button>
    </div>
  );
}

export default PlayerSide;
