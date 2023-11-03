import { Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("first");
        }}
      >
        Lorem.
      </Button>
      <Button
        onClick={() => {
          console.log("second");
        }}
      >
        In.
      </Button>
    </>
  );
}

export default App;
