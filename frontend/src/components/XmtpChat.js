import React, { useState } from "react";
//import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

function Chat({ client, messageHistory, conversation }) {
  const { primaryWallet } = client;
  const address = primaryWallet?.address;
  const [inputValue, setInputValue] = useState("");

  // Function to handle sending a message
  const handleSend = async () => {
    if (inputValue) {
      await onSendMessage(inputValue);
      setInputValue("");
    }
  };

  // Function to handle sending a text message
  const onSendMessage = async (value) => {
    return conversation.send(value);
  };

  // MessageList component to render the list of messages
  const MessageList = ({ messages }) => {
    // Filter messages by unique id
    messages = messages.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );

    return (
      <ul className="messageList">
        {messages.map((message, index) => (
          <li
            key={message.id}
            className="messageItem"
            title="Click to log this message to the console"
          >
            <strong>
              {message.senderAddress === address ? "You" : "Bot"}:
            </strong>
            <span>{message.content}</span>
            <span className="date"> ({message.sent.toLocaleTimeString()})</span>
            <span className="eyes" onClick={() => console.log(message)}>
              👀
            </span>
          </li>
        ))}
      </ul>
    );
  };

  // Function to handle input change (keypress or change event)
  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      handleSend();
    } else {
      setInputValue(event.target.value);
    }
  };
  return (
    <div >
      <div>
        <MessageList messages={messageHistory} />
      </div>
      <div >
        <input
          type="text"
          
          onKeyPress={handleInputChange}
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Type your text here "
        />
        <button  onClick={handleSend}>
          &#128073;
        </button>
      </div>
    </div>
  );
}

export default Chat;
