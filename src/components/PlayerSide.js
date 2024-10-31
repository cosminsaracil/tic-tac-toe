import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/gameSlice";

function PlayerSide({ player }) {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const dispatch = useDispatch();

  // Determine the message to display based on the player's turn
  const message =
    currentPlayer === player
      ? "Your turn"
      : currentPlayer
      ? "Game started, waiting for your turn"
      : "Game has not started yet"; // Handle case when game has not started

  return (
    <div className={`player-side player-${player}`}>
      <h3>{message}</h3> {/* Display the message */}
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
