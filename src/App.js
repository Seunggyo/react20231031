import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("코드실행");
    // setNumber(number + 1); trigger하는 값을 변경하면 안됨
  }, [number]);
  return (
    <>
      <Box></Box>
    </>
  );
}

export default App;
