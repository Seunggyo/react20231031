import { Box, Button, Select } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box w={"480px"}>
        <Select placeholder="옵션을 선택하세요">
          <option value="value-1">Lorem.</option>
          <option value="value-2">Modi.</option>
          <option value="value-3">Earum.</option>
          <option value="value-4">Praesentium!</option>
          <option value="value-5">Animi!</option>
        </Select>
        <Button colorScheme="telegram">선택</Button>
      </Box>
    </>
  );
}

export default App;
