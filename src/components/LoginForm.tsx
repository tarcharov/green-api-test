import React, { FC, useState } from "react";
import styled from "styled-components";
import ChatWindow from "./ChatWindow";
import { login } from "../utils/requests";
const Main = styled.div`
  height: 100%;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 25px;
  color: black;
  font-size: 32px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 32px;
`;
const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idInstance, setIdInstance] = useState("1101823898");
  const [apiTokenInstance, setApiTokenInstance] = useState(
    "5e9b22eb1fe94814bd93fc7934ed29d06bc1244e99004e8a8b"
  );
  const handleLogin = async () => {
    if (await login(idInstance, apiTokenInstance)) {
      setIsLoggedIn(true);
    }
  };
  return (
    <Main>
      {isLoggedIn ? (
        <ChatWindow id={idInstance} token={apiTokenInstance} />
      ) : (
        <Form>
          <Title>Вход</Title>
          <input onChange={(e) => setIdInstance(e.target.value)} />
          <input onChange={(e) => setApiTokenInstance(e.target.value)} />
          <button onClick={handleLogin}>Войти</button>
        </Form>
      )}
    </Main>
  );
};

export default LoginForm;
