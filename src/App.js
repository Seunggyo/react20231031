import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ value, onChange }) {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function BComp({ onChange, value }) {
  return <DComp onChange={onChange} value={value} />;
}

function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      <AComp message={message} />
      <BComp value={message} onChange={(value) => setMessage(value)} />
    </>
  );
}

export default App;
