import { useState } from "react";
import { Button } from "@chakra-ui/react";

function App() {
  const [text, setText] = useState("hello");

  console.log(text);

  function handleButtonClick(e) {
    setText("greeting");
  }

  return (
    <>
      <div>
        <Button onClick={handleButtonClick}>상태변경</Button>
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
