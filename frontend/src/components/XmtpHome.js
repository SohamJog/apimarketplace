import { Client } from "@xmtp/xmtp-js";

import React, { useEffect, useState, useRef } from "react";
import Chat from "./XmtpChat";
import  useEthersWalletClient  from "../hooks/useEthersWalletClient";
import WalletNotConnected from "./WalletNotConnected";

//import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";





export default function Home({PEER_ADDRESS}) {

  const { data, isLoading } = useEthersWalletClient();

  //const PEER_ADDRESS = "0x6ea5CB879208496D27aCfc6319eCD3Dad31fd717";
  //const PEER_ADDRESS = "0x6e6D45D28eF482CC32aF178FeFD4a9eCD55b0eEc"
  const [messages, setMessages] = useState(null);
  const convRef = useRef(null);
  const clientRef = useRef(null);
  console.log(data)
  const { account } = data;
  const signer = data

  const isConnected = !!account;

  // useEffect(() => {
  //   if (primaryWallet && !signer) {
  //     getAndSetSigner();
  //   } 
  // }, [primaryWallet]);

  const [isOnNetwork, setIsOnNetwork] = useState(false);

  // Function to load the existing messages in a conversation
  const newConversation = async function (xmtp_client, addressTo) {
    //Creates a new conversation with the address
    if (await xmtp_client?.canMessage(PEER_ADDRESS)) {
      const conversation = await xmtp_client.conversations.newConversation(
        addressTo
      );
      convRef.current = conversation;
      //Loads the messages of the conversation
      const messages = await conversation.messages();
      setMessages(messages);
    } else {
      console.log("cant message because is not on the network.");
      //cant message because is not on the network.
    }
  };

  // Function to initialize the XMTP client
  const initXmtp = async function () {
    // Create the XMTP client
    const xmtp = await Client.create(signer, { env: "production" });
    //Create or load conversation with Gm bot
    newConversation(xmtp, PEER_ADDRESS);
    // Set the XMTP client in state for later use
    setIsOnNetwork(!!xmtp.address);
    //Set the client in the ref
    clientRef.current = xmtp;
  };

  useEffect(() => {
    if (isOnNetwork && convRef.current) {
      // Function to stream new messages in the conversation
      const streamMessages = async () => {
        const newStream = await convRef.current.streamMessages();
        for await (const msg of newStream) {
          const exists = messages.find((m) => m.id === msg.id);
          if (!exists) {
            setMessages((prevMessages) => {
              const msgsnew = [...prevMessages, msg];
              return msgsnew;
            });
          }
        }
      };
      streamMessages();
    }
  }, [messages, isOnNetwork]);

  return (
    <div >
      {/* Display the ConnectWallet component if not connected */}
      {!isConnected && (
        <div >
          <WalletNotConnected/>
          { /*<DynamicWidget />*/}
        </div>
      )}
      {/* Display XMTP connection options if connected but not initialized */}
      {isConnected && !isOnNetwork && (
        <div >
          {/* <DynamicWidget /> */}
          <button 
            onClick={initXmtp}
            className="bg-gray-800 text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
            Connect to XMTP to Chat!
        </button>
        </div>
      )}
      {/* Render the Chat component if connected, initialized, and messages exist */}
      {isConnected && isOnNetwork && messages && (
        <div className="text-black">
        <Chat
          client={clientRef.current}
          conversation={convRef.current}
          messageHistory={messages}
        />
        </div>
      )}
    </div>
  );
}
