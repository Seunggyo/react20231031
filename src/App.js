import { useState } from "react";
import { Input } from "@chakra-ui/react";

function App(props) {
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <>
      <Input type="text" value={message} onChange={handleChange} />
    </>
  );
}

export default App;
