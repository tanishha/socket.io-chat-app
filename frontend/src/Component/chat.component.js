import React from "react";
import { useState, useEffect } from "react";
import "./chat.css";
import io from "socket.io-client";
const socket = io.connect(process.env.REACT_APP_SOCKET_URL);
export const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [chat, setchat] = useState([]);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("reply-msg-own", { message });
    setMessage("");
  };
  return (
    <>
      <div>
        <form onSubmit={sendChat}>
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};
