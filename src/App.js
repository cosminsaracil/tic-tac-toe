// // import React from "react";
// // import Board from "./components/Board";
// // import PlayerSide from "./components/PlayerSide";
// // import Chat from "./components/Chat";
// // import GameOverModal from "./components/GameOverModal";
// // import "./styles.css"; // Ensure CSS is imported

// // function App() {
// //   return (
// //     <div className="game-container">
// //       {/* Player X's Side */}
// //       <div className="player-side-container">
// //         <PlayerSide player="X" />
// //         <Board player="X" />
// //         <Chat player="X" />
// //       </div>

// //       {/* Player O's Side */}
// //       <div className="player-side-container">
// //         <PlayerSide player="O" />
// //         <Board player="O" />
// //         <Chat player="O" />
// //       </div>

// //       <GameOverModal />
// //     </div>
// //   );
// // }

// // export default App;
// import React from "react";
// import Board from "./components/Board";
// import PlayerSide from "./components/PlayerSide";
// import Chat from "./components/Chat";
// import GameOverModal from "./components/GameOverModal";
// import { useSelector } from "react-redux";
// import "./styles.css"; // Ensure the CSS is imported

// function App() {
//   const currentPlayer = useSelector((state) => state.game.currentPlayer); // Get the current player from Redux state

//   return (
//     <div className="game-container">
//       {/* Player X's Side */}
//       <div className="player-side-container">
//         <PlayerSide player="X" />
//         <Board player="X" />
//         <Chat player="X" />
//         {/* Blur effect for Player O's side when it's Player X's turn */}
//         {currentPlayer === "O" && <div className="blur-effect" />}
//       </div>

//       {/* Separator Line */}
//       <div className="separator" />

//       {/* Player O's Side */}
//       <div className="player-side-container">
//         <PlayerSide player="O" />
//         <Board player="O" />
//         <Chat player="O" />
//         {/* Blur effect for Player X's side when it's Player O's turn */}
//         {currentPlayer === "X" && <div className="blur-effect" />}
//       </div>

//       <GameOverModal />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Board from "./components/Board";
import Chat from "./components/Chat";
import GameOverModal from "./components/GameOverModal";
import PlayerSide from "./components/PlayerSide";
import { useSelector, useDispatch } from "react-redux";
import { resetGame, resetScores } from "./store/gameSlice"; // Import resetScores
import "./styles.css"; // Ensure CSS is imported
import { Play } from "lucide-react";

function App() {
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const score = useSelector((state) => state.game.score);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame()); // Dispatch reset action
  };

  const handleResetScores = () => {
    dispatch(resetScores()); // Dispatch reset scores action
  };

  return (
    <div className="game-container">
      {/* Header Section */}
      <div className="header">
        <div className="player-info player1">
          <span>Player 1: X</span>
        </div>

        {/* Score and Reset buttons centered across the entire header */}
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

        {/* Player O's Name centered in the right half */}
        <div className="player-info player2">
          <span>Player 2: O</span>
        </div>
      </div>

      {/* Divider */}
      <div className="divider" />

      {/* Game Board Section */}
      <div className="game-board">
        {/* Player X's Side */}
        <div className="player-side-container">
          <Board player="X" />
          <Chat player="X" isBlurred={currentPlayer === "O"} />
          {currentPlayer === "O" && <div className="blur-effect" />}
        </div>

        {/* Separator Line */}
        <div className="separator" />

        {/* Player O's Side */}
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
