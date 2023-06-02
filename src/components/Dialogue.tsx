import React, { FC, useState } from "react";
import styled from "styled-components";
import Messages from "./Messages";
import bg_img from "../assets/images/dialogue_background.png";
import { sendMessage } from "../utils/requests";

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

const MessagesWrapper = styled.div`
  display: block;
  position: relative;
  flex: 1 1 0;
  order: 2;
  background: url(${bg_img});
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
}: {
  id: string;
  token: string;
  phone: string;
}) => {
  const [textMessage, setTextMessage] = useState("");
  const [sendMessages, setSendMessages] = useState([]);
  const [receivedMessage, setReceivedMessage] = useState([]);
  const handleSendMessage = async () => {
    const req = await sendMessage(id, token, phone, textMessage);
    console.log(req);
  };
  return (
    <Main>
      <DialogueBlock>
        <DialogueHeader>{phone}</DialogueHeader>
        <MessagesWrapper>
          <Messages></Messages>
        </MessagesWrapper>
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
