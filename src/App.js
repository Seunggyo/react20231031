import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";

function App(props) {
  const [number, setNumber] = useState(0);

  function handlePlusClick(e) {
    setNumber(number + 1);
  }

  function handleMinusClick(e) {
    setNumber(number - 1);
  }

  return (
    <>
      <input type="number" value={number} />
      <Box>
        <Button onClick={handlePlusClick}>+</Button>
        <Button onClick={handleMinusClick}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </Box>
    </>
  );
}

export default App;
