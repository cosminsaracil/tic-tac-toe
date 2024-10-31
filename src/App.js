// import React from "react";
// import Board from "./components/Board";
// import PlayerSide from "./components/PlayerSide";
// import Chat from "./components/Chat";
// import GameOverModal from "./components/GameOverModal";
// import "./styles.css"; // Ensure CSS is imported

// function App() {
//   return (
//     <div className="game-container">
//       {/* Player X's Side */}
//       <div className="player-side-container">
//         <PlayerSide player="X" />
//         <Board player="X" />
//         <Chat player="X" />
//       </div>

//       {/* Player O's Side */}
//       <div className="player-side-container">
//         <PlayerSide player="O" />
//         <Board player="O" />
//         <Chat player="O" />
//       </div>

//       <GameOverModal />
//     </div>
//   );
// }

// export default App;
import React from "react";
import Board from "./components/Board";
import PlayerSide from "./components/PlayerSide";
import Chat from "./components/Chat";
import GameOverModal from "./components/GameOverModal";
import { useSelector } from "react-redux";
import "./styles.css"; // Ensure the CSS is imported

function App() {
  const currentPlayer = useSelector((state) => state.game.currentPlayer); // Get the current player from Redux state

  return (
    <div className="game-container">
      {/* Player X's Side */}
      <div className="player-side-container">
        <PlayerSide player="X" />
        <Board player="X" />
        <Chat player="X" />
        {/* Blur effect for Player O's side when it's Player X's turn */}
        {currentPlayer === "O" && <div className="blur-effect" />}
      </div>

      {/* Separator Line */}
      <div className="separator" />

      {/* Player O's Side */}
      <div className="player-side-container">
        <PlayerSide player="O" />
        <Board player="O" />
        <Chat player="O" />
        {/* Blur effect for Player X's side when it's Player O's turn */}
        {currentPlayer === "X" && <div className="blur-effect" />}
      </div>

      <GameOverModal />
    </div>
  );
}

export default App;
