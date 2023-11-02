import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();
  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "제목",
            description: "내용입니다.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        }
      >
        토스트 보이기
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "제목",
            description: "부정",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        }
      >
        부정 보이기
      </Button>
    </>
  );
}

export default App;
