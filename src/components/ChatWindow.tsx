import React, { useState } from "react";
import styled from "styled-components";
import bg_img from "../assets/images/dialogue_background.png";
import { sendMessage } from "../utils/requests";
import Chat from "./Chat";
import Dialogue from "./Dialogue";
import Messages from "./Messages";

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

  const handleCreateChat = () => {
    setChats((prev) => [...prev, { number: inputPhone }]);
    setInputPhone("");
  };

  const handleOpenChat = (phone: string) => {
    setSelectedPhoneNumber(phone);
  };
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
        <Dialogue id={id} token={token} phone={selectedPhoneNumber}></Dialogue>
      )}
    </Main>
  );
};

export default ChatWindow;
