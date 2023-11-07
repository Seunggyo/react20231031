import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ onChange, value }) {
  return (
    <Box>
      <Input onChange={(e) => onChange(e.target.value)} value={value} />
    </Box>
  );
}

function MyText({ text }) {
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <MyInput value={address} onChange={(text) => setAddress(text)} />
      <MyText text={address} />

      <hr />
      <MyInput value={email} onChange={(text) => setEmail(text)} />
      <MyText text={email} />
    </>
  );
}

export default App;
