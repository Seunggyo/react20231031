import { Input, Text } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

function MyInput() {
  const value = useContext(StringContext);
  return <Input onChange={(e) => value.setString(e.target.value)} />;
}

function MyText() {
  const value = useContext(StringContext);
  return <Text>메시지 출력할 위치 : {value.string}</Text>;
}

function App() {
  const [string, setString] = useState("");
  return (
    <>
      <StringContext.Provider value={{ string, setString }}>
        <MyInput />
        <MyText />
      </StringContext.Provider>
    </>
  );
}

const StringContext = createContext(null);

export default App;
