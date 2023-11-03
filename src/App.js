import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}

function App() {
  return (
    <>
      <MyBox color={"white"} bg={"blue"}>
        안녕하세요
      </MyBox>
      <MyBox color={"red"} bg={"black"}>
        반갑습니다.
      </MyBox>
    </>
  );
}

export default App;
