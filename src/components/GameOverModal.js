import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/gameSlice";
import { resetChat } from "../store/chatSlice";
import "./GameOverModal.css";

function GameOverModal() {
  const result = useSelector((state) => state.game.result);
  const dispatch = useDispatch();

  useEffect(() => {
    // when there is a result set up a timer to reset the game and chat
    if (result) {
      const timer = setTimeout(() => {
        dispatch(resetGame()); // reset game state
        dispatch(resetChat()); // reset chat state
      }, 5000);
      return () => clearTimeout(timer); // clean up the timer on unmount
    }
  }, [result, dispatch]);

  if (!result) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{result}</h3>

        <button
          onClick={() => {
            dispatch(resetGame());
            dispatch(resetChat());
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;
