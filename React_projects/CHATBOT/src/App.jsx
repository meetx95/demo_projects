import React, { useState } from "react";

function Input() {
  return (
    <div className="input">
      <input placeholder="Ask me anything!" />
      <button>Send</button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  return (
    <div className="Msg">
      {sender === "Bot" && <img src="Bot.png" alt="Bot" />}
      <span>{message}</span>
      {sender === "User" && <img src="user.png" alt="User" />}
    </div>
  );
}

function ChatArray() {
  const [chats, setChats] = useState([
    { message: "Hello", sender: "User", id: "id1" },
    { message: "How can I help you!", sender: "Bot", id: "id2" },
    { message: "Idk i forgot", sender: "User", id: "id3" },
    { message: "its ok", sender: "Bot", id: "id4" },
  ]);

  function SendMessage() {
    setChats([
      ...chats,
      {
        message: "Test",
        sender: "User",
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <>
      <button onClick={SendMessage}>Send Message</button>

      {chats.map((chat) => (
        <ChatMessage
          key={chat.id}
          message={chat.message}
          sender={chat.sender}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <center>
      <div className="box">
        <ChatArray />
        <Input />
      </div>
    </center>
  );
}

export default App;