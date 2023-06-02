import React, { FC, useState } from "react";
import styled from "styled-components";
import bg_img from "../assets/images/dialogue_background.png";

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

const ReceivedMessage = styled.div`
  display: inline-block;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 10px;
  margin-right: auto;
`;
const SendMessage = styled.div`
  display: inline-block;
  background-color: #dcf8c6;
  border-radius: 10px;
  padding: 10px;
  margin-left: auto;
`;
const Messages = () => {
  return (
    <Main>
      <MessageWrapper>
        <ReceivedMessage>test</ReceivedMessage>
      </MessageWrapper>
      <MessageWrapper>
        <SendMessage>test2</SendMessage>
      </MessageWrapper>
      <MessageWrapper>
        <SendMessage>test3</SendMessage>
      </MessageWrapper>
    </Main>
  );
};

export default Messages;
