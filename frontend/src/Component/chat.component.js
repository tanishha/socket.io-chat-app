import React from "react";
import { useState, useEffect } from "react";
import "./chat.css";
import io from "socket.io-client";
import { nanoid } from "nanoid";
const socket = io.connect(process.env.REACT_APP_SOCKET_URL);

const username = nanoid(4);

export const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [chat, setchat] = useState([]);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("new_msg", { message, username });
    setMessage("");
  };
  useEffect(() => {
    socket.on("reply-msg", (payload) => {
      setchat([...chat, payload]);
    });
  });
  return (
    <>
      <div>
        {chat.map((payload, i) => {
          return (
            <p key={i}>
              {payload.message}:<span>id:{payload.username}</span>
            </p>
          );
        })}
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
