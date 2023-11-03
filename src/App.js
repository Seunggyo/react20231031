import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

function App() {
  function Hello() {
    console.log("hello");
  }

  function Greeting() {
    console.log("greeting");
  }

  return (
    <>
      <MyButton executeClick={Hello}>Hello</MyButton>
      <MyButton executeClick={Greeting}>Greeting</MyButton>
    </>
  );
}

export default App;
