import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={3}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"red"}>Quibusdam.</Box>
        <Box bg={"gray"}>Ducimus!</Box>
        <Box bg={"blue"}>Vitae.</Box>
        <Box bg={"green"}>Quod!</Box>
      </Flex>
    </>
  );
}

export default App;
