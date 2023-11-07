import { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  // 3. context 사용하기 : useContext(context)

  const { setMessage } = useContext(MessageContext);

  return <Button onClick={() => setMessage("변경된 메시지")}>변경 버튼</Button>;
}

function BComp() {
  // 3. context 사용하기 useContext(Context)

  const { message } = useContext(MessageContext);

  return <Text>{message}</Text>;
}

function App() {
  const [message, setMessage] = useState("초기 상태");

  return (
    <>
      {/* 2. context에 value 넣기 : <Context.Provider value={state}*/}
      <MessageContext.Provider value={{ message, setMessage }}>
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </>
  );
}

// 1. context 만들기 : createContext(null)
const MessageContext = createContext(null);
export default App;
