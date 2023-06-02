import React, { FC, useState } from "react";
import styled from "styled-components";

const Chat = ({
  phone,
  handleOpenChat,
}: {
  phone: string;
  handleOpenChat: (phone: string) => void;
}) => {
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
  return (
    <Main onClick={() => handleOpenChat(phone)}>
      <h3>{phone}</h3>
    </Main>
  );
};

export default Chat;
