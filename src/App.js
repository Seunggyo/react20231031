import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function ChildComp({ onClick }) {
  return (
    <Button colorScheme="red" onClick={onClick}>
      클릭
    </Button>
  );
}

function SomeComp({ onClick }) {
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ message }) {
  return <Text>{message}</Text>;
}

function OtherComp({ message }) {
  return <OtherChildComp message={message} />;
}

function App() {
  const [message, setMessage] = useState("원래 메시지");

  return (
    <>
      <SomeComp onClick={() => setMessage("다른메시지")} />
      <OtherComp message={message} />
    </>
  );
}

export default App;
