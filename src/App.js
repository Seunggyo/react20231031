import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    e.stopPropagation();
    console.log("바깥 상자 클릭됨");
  }

  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("안쪽 상자 클릭됨");
  }

  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭됨");
  }

  return (
    <>
      <Center
        onClick={handleOuterBoxClick}
        w={"400px"}
        h={"400px"}
        bg={"darkblue"}
      >
        <Center
          onClick={handleInnerBoxClick}
          w={"200px"}
          h={"200px"}
          bg={"skyblue"}
        >
          <Button onClick={handleButtonClick} colorScheme="twitter">
            Button1
          </Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
