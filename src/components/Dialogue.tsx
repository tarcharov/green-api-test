import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Messages from "./Messages";
import { sendMessage } from "../utils/requests";
import { Message } from "../utils/types";
const Main = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  flex-grow: 1;
  background: #efeae2;
`;

const DialogueBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DialogueHeader = styled.div`
  padding-left: 15px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 59px;
`;

const DialogueFooter = styled.div`
  min-height: 48px;
  order: 3;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
  border-top: 1px solid #ededed;
`;

const InputMessage = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  border-radius: 20px;
  background-color: #fff;
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

const Dialogue = ({
  id,
  token,
  phone,
  messages,
}: {
  id: string;
  token: string;
  phone: string;
  messages: Message[];
}) => {
  const [textMessage, setTextMessage] = useState("");

  const handleSendMessage = async () => {
    const req = await sendMessage(id, token, phone, textMessage);
    console.log(req);
  };

  return (
    <Main>
      <DialogueBlock>
        <DialogueHeader>{phone}</DialogueHeader>
        <Messages messages={messages}></Messages>
        <DialogueFooter>
          <InputMessage
            placeholder="Введите сообщение"
            value={textMessage}
            onChange={(e: any) => setTextMessage(e.target.value)}
          />
          <SendButton onClick={handleSendMessage}>Отправить</SendButton>
        </DialogueFooter>
      </DialogueBlock>
    </Main>
  );
};

export default Dialogue;
