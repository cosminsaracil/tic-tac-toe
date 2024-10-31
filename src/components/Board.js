import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSquare } from "../store/gameSlice";
import Square from "./Square";

function Board({ player }) {
  const board = useSelector((state) => state.game.board);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (!board[index]) {
      dispatch(selectSquare(index));
    }
  };

  const isPlayerTurn = currentPlayer === player;

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => isPlayerTurn && handleClick(index)}
          disabled={!isPlayerTurn || value !== null} // Disable if not player's turn or square is filled
        />
      ))}
    </div>
  );
}

export default Board;
