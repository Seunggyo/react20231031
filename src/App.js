import { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터(Setup) : the function with your Effect's logic 부작용이 있는 함수
  // 두번째 파라미터 : Setup을 실행 시키는 값의 나열(배열)
  //                빈 배열이면 첫 렌더링 때만 실행됨
  //                만약 두번째 파라미터를 적지 않을 경우 재 렌더링 할때마다 실행시킴
  useEffect(() => {
    console.log("effect 함수 실행됨");
  }, [number, text]);
  return (
    <>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Text>{text}</Text>
    </>
  );
}

export default App;
