import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chat from "./Chat";
import Dialogue from "./Dialogue";
import { deleteMessages, fetchMessages } from "../utils/requests";
import { Message } from "../utils/types";
const Main = styled.div`
  position: relative;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
`;
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 40%;
  max-width: 40%;
  position: relative;
  height: 100%;
  overflow: visible;
`;
const ToolBar = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 59px;
`;

const Chats = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;
const SendButton = styled.button`
  margin-left: 10px;
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #25d366;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }

  &:active {
    background-color: #075e54;
  }
`;

type ChatObj = {
  number: string;
};

const ChatWindow = ({ id, token }: { id: string; token: string }) => {
  const [inputPhone, setInputPhone] = useState("");
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");
  const [chats, setChats] = useState<ChatObj[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleCreateChat = () => {
    setChats((prev) => [...prev, { number: `${inputPhone}@c.us` }]);
    setInputPhone("");
  };

  const handleOpenChat = (phone: string) => {
    setSelectedPhoneNumber(phone);
  };

  const addNewMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMessages(id, token);
        console.log(data);
        const { receiptId } = data;
        const { senderData, messageData } = data.body;
        const { sender } = senderData;
        const { textMessage } = messageData.textMessageData;
        const newMessage: Message = {
          phone: sender,
          textMessage,
          sent: false,
        };
        console.log("NewMessage: ", newMessage);
        addNewMessage(newMessage);
        await deleteMessages(id, token, receiptId);
      } catch (error) {
        console.error("Ошибка при получении сообщений:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [id, token]);

  return (
    <Main>
      <SideBar>
        <ToolBar>
          <input
            type={"text"}
            value={inputPhone}
            onChange={(e) => setInputPhone(e.target.value)}
          />
          <SendButton onClick={handleCreateChat}>Создать Чат</SendButton>
        </ToolBar>
        <Chats>
          {chats.length > 0 &&
            chats.map((chat) => (
              <Chat handleOpenChat={handleOpenChat} phone={chat.number} />
            ))}
        </Chats>
      </SideBar>
      {selectedPhoneNumber !== "" && (
        <Dialogue
          id={id}
          token={token}
          phone={selectedPhoneNumber}
          messages={messages}
          addNewMessage={addNewMessage}
        ></Dialogue>
      )}
    </Main>
  );
};

export default ChatWindow;
