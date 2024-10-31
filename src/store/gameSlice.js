import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(9).fill(null), // 3x3 ttt board
  currentPlayer: "X",
  result: null,
  score: { X: 0, O: 0 },
};

//  winning combinations
const winningCombinations = [
  [0, 1, 2], // 1
  [3, 4, 5], // 2
  [6, 7, 8], // 3
  [0, 3, 6], // ,1
  [1, 4, 7], // ,2
  [2, 5, 8], // ,3
  [0, 4, 8], // diagonal \
  [2, 4, 6], // diagonal /
];

// const checkWinner = (board) => {
//   for (const combination of winningCombinations) {
//     const [a, b, c] = combination;
//     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//       return board[a];
//     }
//   }
//   if (board.every((square) => square)) {
//     return "Draw";
//   }
//   return null;
// };
const checkWinner = (board) => {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return the winner ('X' or 'O')
    }
  }
  // check for draw
  if (board.every((square) => square)) {
    return "Draw";
  }
  return null;
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectSquare: (state, action) => {
      const index = action.payload;
      if (!state.board[index]) {
        state.board[index] = state.currentPlayer;
        const winner = checkWinner(state.board);
        if (winner) {
          // update the score for the winning player
          if (winner !== "Draw") {
            state.score[winner] += 1; // increment the winner's score
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
      state.result = null;
    },
    resetScores: (state) => {
      state.score = { X: 0, O: 0 };
    },
  },
});

export const { selectSquare, resetGame, resetScores } = gameSlice.actions;
export default gameSlice.reducer;
