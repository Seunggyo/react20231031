import { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

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
export const MessageContext = createContext(null);
export default App;
