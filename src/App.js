import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Similique.</Button>
      <Button colorScheme="orange">Accusamus!</Button>
      <Button colorScheme="facebook">Fuga!</Button>
      <Button colorScheme="teal" size={"sm"}>
        Magnam?
      </Button>
      <Button colorScheme="twitter" size={"lg"}>
        Omnis!
      </Button>
      <Button colorScheme="blackAlpha" variant={"outline"}>
        Placeat!
      </Button>
      <Button colorScheme="whatsapp" variant={"ghost"}>
        Tempora!
      </Button>
      <Button variant={"link"}>Corporis.</Button>
      <Button leftIcon={<EmailIcon />}></Button>
      <Button rightIcon={<ArrowRightIcon />}>Modi.</Button>
      <Button isLoading>Asperiores!</Button>
      <Button isLoading loadingText={"확인중"}>
        Nostrum?
      </Button>
      <Button>Laudantium?</Button>
      <Button>Veniam?</Button>
      <Button>Dignissimos.</Button>
      <Button>Quas?</Button>
      <Button>Atque.</Button>
      <Button>Quos.</Button>
      <Button>Doloribus.</Button>
      <Button>Ratione.</Button>
      <Button>Nam!</Button>
      <Button>Laborum!</Button>
      <Button>Ex.</Button>
      <Button>Aliquid.</Button>
      <Button>Earum.</Button>
      <Button>Quidem.</Button>
      <Button>Enim!</Button>
      <Button>Voluptas.</Button>
      <Button>Iste.</Button>
    </>
  );
}

export default App;
