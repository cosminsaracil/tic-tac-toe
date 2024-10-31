import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSquare } from "../store/gameSlice";
import Square from "./Square";

function Board() {
  const board = useSelector((state) => state.game.board);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (!board[index]) {
      dispatch(selectSquare(index));
    }
  };

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleClick(index)}
          disabled={
            (currentPlayer === "X" && value === "O") ||
            (currentPlayer === "O" && value === "X")
          }
        />
      ))}
    </div>
  );
}

export default Board;
