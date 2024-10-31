//! currently this is not used, i thought the structure different at the time i wrote this
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/gameSlice";

function PlayerSide({ player }) {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const dispatch = useDispatch();

  // determine the message to display based on the player's turn
  const message =
    currentPlayer === player
      ? "Your turn"
      : currentPlayer
      ? "Game started, waiting for your turn"
      : "Game has not started yet"; // handle case when game has not started

  return (
    <div className={`player-side player-${player}`}>
      <h3>{message}</h3>
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
