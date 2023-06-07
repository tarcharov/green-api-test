import React, { FC, useState } from "react";
import styled from "styled-components";
import bg_img from "../assets/images/dialogue_background.png";
import { Message } from "../utils/types";
const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px 15px;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;
const MessagesWrapper = styled.div`
  display: block;
  position: relative;
  flex: 1 1 0;
  order: 2;
  background: url(${bg_img});
`;

const MessageBlock = styled.div<{ sent: boolean }>`
  display: inline-block;
  background-color: ${(props) => (props.sent ? "#dcf8c6" : "#f4f4f4")};
  margin-right: ${(props) => (props.sent ? "auto" : "none")};
  margin-left: ${(props) => (props.sent ? "none" : "auto")};
  border-radius: 10px;
  padding: 10px;
`;

type Props = { phone: string; messages: Message[] };

const Messages: React.FC<Props> = ({ phone, messages }) => {
  return (
    <Main>
      <MessagesWrapper>
        {messages.length > 0 &&
          messages
            .filter((message) => message.phone === phone)
            .map((message) => (
              <MessageWrapper>
                <MessageBlock sent={message.sent}>
                  {message.textMessage}
                </MessageBlock>
              </MessageWrapper>
            ))}
      </MessagesWrapper>
    </Main>
  );
};

export default Messages;
