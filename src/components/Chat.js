import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice"; // Correct import

function Chat({ player }) {
  const dispatch = useDispatch();
  const messages = useSelector((state) =>
    state.chat ? state.chat.messages : []
  );
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      dispatch(
        addMessage({
          text: input,
          sender: `Player ${player}`, // Update based on the actual player
          time: new Date().toLocaleTimeString(),
        })
      );
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === `Player ${player}` ? "player1" : "player2"
            }`}
          >
            <span>{msg.text}</span>
            <span className="timestamp">{msg.time}</span>
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chat;
