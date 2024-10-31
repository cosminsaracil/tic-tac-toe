// import React, { useState, useEffect } from "react";
// import { create } from "zustand";

// const useStore = create((set) => ({
//   board: Array(9).fill(null),
//   currentPlayer: "X",
//   winner: null,
//   chat: [],
//   scores: { X: 0, O: 0 },

//   updateBoard: (index) =>
//     set((state) => {
//       if (state.board[index] || state.winner) return state;

//       const newBoard = [...state.board];
//       newBoard[index] = state.currentPlayer;

//       const winner = calculateWinner(newBoard);
//       if (winner) {
//         return {
//           board: newBoard,
//           winner,
//           scores: {
//             ...state.scores,
//             [winner]: state.scores[winner] + 1,
//           },
//         };
//       }

//       return {
//         board: newBoard,
//         currentPlayer: state.currentPlayer === "X" ? "O" : "X",
//       };
//     }),

//   addMessage: (player, message) =>
//     set((state) => ({
//       chat: [
//         ...state.chat,
//         { player, message, time: new Date().toLocaleTimeString() },
//       ],
//     })),

//   resetGame: () =>
//     set({
//       board: Array(9).fill(null),
//       currentPlayer: "X",
//       winner: null,
//       chat: [],
//       scores: { X: 0, O: 0 },
//     }),

//   startNewGame: () =>
//     set((state) => ({
//       board: Array(9).fill(null),
//       currentPlayer: "X",
//       winner: null,
//     })),
// }));

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// };

// const Square = ({ value, onClick, disabled }) => (
//   <button
//     className={`w-20 h-20 border-2 border-gray-300 rounded-lg text-4xl font-bold
//       ${disabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"}
//       ${value === "X" ? "text-blue-500" : "text-red-500"}`}
//     onClick={onClick}
//     disabled={disabled}
//   >
//     {value}
//   </button>
// );

// const Board = ({ player }) => {
//   const { board, currentPlayer, winner, updateBoard } = useStore();

//   return (
//     <div className="grid grid-cols-3 gap-2">
//       {board.map((value, i) => (
//         <Square
//           key={i}
//           value={value}
//           onClick={() => updateBoard(i)}
//           disabled={winner || currentPlayer !== player || value}
//         />
//       ))}
//     </div>
//   );
// };

// const Chat = ({ player }) => {
//   const [message, setMessage] = useState("");
//   const { chat, addMessage } = useStore();

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (message.trim()) {
//       addMessage(player, message.trim());
//       setMessage("");
//     }
//   };

//   return (
//     <div className="h-64 flex flex-col">
//       <div className="flex-1 border rounded-lg p-2 mb-2 overflow-auto">
//         {chat.map((msg, i) => (
//           <div
//             key={i}
//             className={`mb-2 ${
//               msg.player === player ? "text-right" : "text-left"
//             }`}
//           >
//             <span
//               className={`inline-block p-2 rounded-lg ${
//                 msg.player === player ? "bg-blue-100" : "bg-gray-100"
//               }`}
//             >
//               <span className="font-bold">{msg.player}: </span>
//               {msg.message}
//               <span className="text-xs text-gray-500 ml-2">{msg.time}</span>
//             </span>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSend} className="flex gap-2">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 px-3 py-2 border rounded-lg"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// const PlayerSide = ({ player }) => {
//   const { currentPlayer, winner, scores } = useStore();

//   return (
//     <div className="border rounded-lg p-4">
//       <div
//         className={`text-center mb-4 ${
//           currentPlayer === player ? "text-green-500" : "text-gray-500"
//         }`}
//       >
//         <h2 className="text-xl font-bold">
//           Player {player} {currentPlayer === player && "(Your Turn)"}
//         </h2>
//         <div className="text-sm text-gray-500">Score: {scores[player]}</div>
//       </div>
//       <Board player={player} />
//       <div className="mt-4">
//         <Chat player={player} />
//       </div>
//     </div>
//   );
// };

// const TicTacToe = () => {
//   const { winner, resetGame, startNewGame } = useStore();

//   useEffect(() => {
//     if (winner) {
//       const timer = setTimeout(startNewGame, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [winner, startNewGame]);

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       {winner && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg text-center">
//             <h2 className="text-2xl font-bold mb-2">Game Over!</h2>
//             <p className="text-lg">Player {winner} wins!</p>
//           </div>
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={resetGame}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
//           >
//             Reset Game
//           </button>
//         </div>

//         <div className="grid md:grid-cols-2 gap-4">
//           <PlayerSide player="X" />
//           <PlayerSide player="O" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TicTacToe;
