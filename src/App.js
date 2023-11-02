import { Box, Image } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box boxSize={"md"}>
        <Image src="https://bit.ly/dan-abramov"></Image>
      </Box>
      <Box boxSize={"200px"}>
        <Image src="https://bit.ly/dan-abramov" />
      </Box>
      <Box>
        <Image src="https://bit.ly/dan-abramov" borderRadius={"full"}></Image>
      </Box>
      <Box>
        <Image
          src="abc.jpg"
          fallbackSrc="https://via.placeholder.com/500"
          borderRadius={"full"}
        ></Image>
      </Box>
    </>
  );
}

export default App;
