import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(9).fill(null), // 3x3 Tic-Tac-Toe board
  currentPlayer: "X",
  result: null, // Initialize result state
  score: { X: 0, O: 0 }, // Initialize score state
};

// Define winning combinations
const winningCombinations = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal \
  [2, 4, 6], // Diagonal /
];

// const checkWinner = (board) => {
//   for (const combination of winningCombinations) {
//     const [a, b, c] = combination;
//     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//       return board[a]; // Return the winner ('X' or 'O')
//     }
//   }
//   // Check for draw (if there are no empty squares left)
//   if (board.every((square) => square)) {
//     return "Draw"; // Indicate a draw
//   }
//   return null; // No winner yet
// };
const checkWinner = (board) => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return the winner ('X' or 'O')
    }
  }
  // Check for draw (if there are no empty squares left)
  if (board.every((square) => square)) {
    return "Draw"; // Indicate a draw
  }
  return null; // No winner yet
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectSquare: (state, action) => {
      const index = action.payload;
      if (!state.board[index]) {
        state.board[index] = state.currentPlayer;

        // Check for win or draw logic here
        const winner = checkWinner(state.board);
        if (winner) {
          // Update the score for the winning player
          if (winner !== "Draw") {
            state.score[winner] += 1; // Increment the winner's score
          }
          state.result =
            winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins!`;
        }

        state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
      }
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.currentPlayer = "X";
      state.result = null; // Clear result
    },
    resetScores: (state) => {
      state.score = { X: 0, O: 0 }; // Reset scores
    },
  },
});

export const { selectSquare, resetGame, resetScores } = gameSlice.actions; // Export actions
export default gameSlice.reducer;
