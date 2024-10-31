import React from "react";

function Square({ value, onClick, disabled }) {
  return (
    <button className="square" onClick={onClick} disabled={disabled}>
      {value === "X" && (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="4"
            y1="20"
            x2="20"
            y2="4"
            stroke="#ffa500"
            strokeWidth="4"
          />
          <line
            x1="20"
            y1="20"
            x2="4"
            y2="4"
            stroke="#ffa500"
            strokeWidth="4"
          />
        </svg>
      )}
      {value === "O" && (
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#ffa500"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      )}
    </button>
  );
}

export default Square;
