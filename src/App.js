import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);
  let text = "초기 메시지";

  function handleClick() {
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <>
      <Button onClick={handleClick}>바꾸기</Button>
      <Text>{number}</Text>
    </>
  );
}

export default App;
