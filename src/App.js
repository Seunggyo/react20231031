import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  // set ... 메소드 상태 변경 할 수 있음
  // 상태가 같은지 아닌지 판단 해서 re-render 결정

  const [number, setNumber] = useState(0);

  const [numberObject, setNumberObject] = useState({ number: 0 });
  return (
    <>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>number 변경</Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button
          onClick={() => {
            numberObject.number = numberObject.number + 1;
            setNumberObject(numberObject);
          }}
        >
          number 객체 변경
        </Button>
        <Text>{numberObject.number}</Text>
      </Box>
    </>
  );
}

export default App;
