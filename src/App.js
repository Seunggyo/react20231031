import { Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <Box>
        <Input type="text" value={username} onChange={handleUserNameChange} />
      </Box>
      <Box>
        <Input type="email" value={email} onChange={handleEmailChange} />
      </Box>
      <Text>
        {username}의 email은 {email} 입니다. 주소는 {address}입니다.
      </Text>

      <Box>
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
    </>
  );
}

export default App;
