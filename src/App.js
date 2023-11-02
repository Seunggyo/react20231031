import { ChatIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Center, Circle, Square } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center bg={"red"} h={"200px"}>
        <Square bg={"blue"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Square>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h="100px">
          <ChatIcon />
        </Circle>
      </Center>
    </>
  );
}

export default App;
