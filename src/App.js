import { Button, Text } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

function CComp() {
  // 3. context 사용하기 : useContext(Context)
  const message = useContext(MessageContext);
  return <Text>받은 메시지 : {message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App() {
  const [message, setMessage] = useState("");

  // message state 를 CComp에 전달하기
  // 1. context 만들기 : createContext();
  // context 이름은 대문자로 시작하고 Context로 끝남 ...Context로 지어야 한다.
  // 2. context 에 state 넣기 : <Context.provider value={state}></Context.provider>
  // 3. tree 안에 담아 두기

  return (
    <>
      <Button onClick={() => setMessage("바꾼메시지")}>
        메시지 바꾸기 버튼
      </Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </>
  );
}

// 1. context 만들기
// context 이름은 대문자로 시작하고 Context로 끝남 ...Context로 지어야 한다.
// 2. context 에 state 넣기 : <Context.provider value={state}></Context.provider>
// 3. tree 안에 담아 두기
const MessageContext = createContext(null);
export default App;
