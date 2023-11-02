import { Box, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w={"480px"}>
        <FormControl>
          <FormLabel>본문</FormLabel>
          <Textarea placeholder="본문을 입력하세요" h={"500px"} />
        </FormControl>
      </Box>
    </>
  );
}

export default App;
