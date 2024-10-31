import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/gameSlice";
import { resetChat } from "../store/chatSlice"; // Import resetChat action

function GameOverModal() {
  const result = useSelector((state) => state.game.result); // Access the result from game state
  const dispatch = useDispatch();

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        dispatch(resetGame()); // Reset game state
        dispatch(resetChat()); // Reset chat state
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result, dispatch]);

  if (!result) return null;

  return (
    <div className="modal">
      <h3>{result}</h3>
    </div>
  );
}

export default GameOverModal;
