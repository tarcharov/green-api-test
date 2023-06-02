import React from "react";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;
function App() {
  return (
    <Main>
      <LoginForm></LoginForm>
    </Main>
  );
}

export default App;
