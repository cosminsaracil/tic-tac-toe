import React from "react";
import Board from "./components/Board";
import Chat from "./components/Chat";
import GameOverModal from "./components/GameOverModal";
import { useSelector, useDispatch } from "react-redux";
import { resetGame, resetScores } from "./store/gameSlice";
import "./styles.css";
function App() {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const score = useSelector((state) => state.game.score);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  const handleResetScores = () => {
    dispatch(resetScores());
  };

  return (
    <div className="game-container">
      <div className="header">
        <div className="player-info player1">
          <span>Player 1: X</span>
        </div>
        <div className="score-container">
          <button className="reset-button" onClick={handleResetScores}>
            Reset Scores
          </button>
          <span className="score">
            Score: {score.X}:{score.O}
          </span>
          <button className="reset-button" onClick={handleReset}>
            Reset Game
          </button>
        </div>
        <div className="player-info player2">
          <span>Player 2: O</span>
        </div>
      </div>

      <div className="divider" />

      <div className="game-board">
        <div className="player-side-container">
          <Board player="X" />
          <Chat player="X" isBlurred={currentPlayer === "O"} />
          {currentPlayer === "O" && <div className="blur-effect" />}
        </div>
        <div className="separator" />
        <div className="player-side-container">
          <Board player="O" />
          <Chat player="O" isBlurred={currentPlayer === "X"} />
          {currentPlayer === "X" && <div className="blur-effect" />}
        </div>
      </div>

      <GameOverModal />
    </div>
  );
}

export default App;
