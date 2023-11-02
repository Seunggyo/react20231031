import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input></Input>
            <FormHelperText>이름을 적어주세요</FormHelperText>
            <Button>전송</Button>
          </FormControl>
        </Box>
      </Center>
      <Center mt={4}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel></FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value="value1">Lorem.</Radio>
                <Radio value="value2">Lorem.</Radio>
                <Radio value="value3">Lorem.</Radio>
                <Radio value="value4">Lorem.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center mt={4}>
        <Box w={"480px"}>
          <FormControl>
            <CheckboxGroup>
              <Flex gap={5}>
                <Checkbox colorScheme="twitter">Lorem.</Checkbox>
                <Checkbox colorScheme="twitter">Lorem.</Checkbox>
                <Checkbox colorScheme="twitter">Lorem.</Checkbox>
              </Flex>
            </CheckboxGroup>
          </FormControl>
        </Box>
      </Center>
    </>
  );
}

export default App;
