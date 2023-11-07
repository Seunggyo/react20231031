import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>텍스트 바꾸기</Button>
    </Box>
  );
}

function App() {
  const [message, setMessage] = useState("hello");

  function handleButtonClick() {
    setMessage("안녕하세요");
  }

  return (
    <>
      <MyComp1 onClick={handleButtonClick}></MyComp1>
      {/*My Comp1 에 있는 버튼이 클릭되면*/}
      <MyComp2 message={message}></MyComp2>
      {/*  My Comp2 에 있는 텍스트가 변경*/}
    </>
  );
}

export default App;
