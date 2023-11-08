import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          {/* react- router 사용시에는 a 태그를 사용하지 않을것 */}
          {/* 대신 Link component 사용 */}
          <a href="/apath">a로 가기</a>
        </Box>
        <Box>
          <a href="/bpath">b로 가기</a>
        </Box>
        <Box>
          <Link to={"/apath"}>a로 ㄱㄱ</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>b로 ㄱㄱ</Link>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>A 요소들</Box>;
}

function BComp() {
  return <Box>B 요소들</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeComponent />}>
        <Route path="apath" element={<AComp />} />
        <Route path="bpath" element={<BComp />} />
      </Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
