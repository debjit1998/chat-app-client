import React from "react";
import "./Input.css";

function Input({ message, setMessage, sendMessage }) {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="sendButton">SEND</button>
    </form>
  );
}

export default Input;
