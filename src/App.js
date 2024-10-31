import React from "react";
import Board from "./components/Board";
import PlayerSide from "./components/PlayerSide";
import Chat from "./components/Chat";
import GameOverModal from "./components/GameOverModal";
import "./styles.css"; // Ensure CSS is imported

function App() {
  return (
    <div className="game-container">
      <div className="player-side-container">
        <PlayerSide player="X" />
        <Board />
      </div>
      <div className="player-side-container">
        <PlayerSide player="O" />
        <Board />
      </div>
      <Chat />
      <GameOverModal />
    </div>
  );
}

export default App;
