import { Box, Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <Box as="a" href={to}>
      <Button>{children}</Button>
    </Box>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>naver 로</MyLink>
      <MyLink to={"https://www.daum.net"}>daum 으로</MyLink>
    </>
  );
}

export default App;
