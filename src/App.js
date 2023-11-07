import { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ onChange, address }) {
  return (
    <Box>
      <Input onChange={(e) => onChange(e.target.value)} value={address} />
    </Box>
  );
}

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");

  return (
    <>
      <MyInput address={address} onChange={(text) => setAddress(text)} />
      <MyText address={address} />
    </>
  );
}

export default App;
