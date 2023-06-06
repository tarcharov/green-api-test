import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";

const Main = styled.div`
    padding-left: 15px;
    height: 72px;
    border-top: 1px solid #e9edef;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #f5f2f2;
    }
    &:active {
      background-color: #075e54;
    }
  `;

const Chat = ({
    id,token,
  phone,
  handleOpenChat
}: {
  phone: string;
  handleOpenChat: (phone: string) => void;
  id: string;
  token: string;
}) => {

  return (
    <Main onClick={() => handleOpenChat(phone)}>
      <h3>{phone}</h3>
    </Main>
  );
};

export default Chat;
