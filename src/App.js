import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

function HomeComponent() {
  // 경로 이동시 useNavigate hook을 사용 해야한다.
  const navigate = useNavigate();
  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          {/* 경로 이동시 js코드를 사용해서는 안된다. */}
          <Button onClick={() => (window.location.href = "/apath")}>
            a로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => (window.location.href = "/bpath")}>
            b로 가기
          </Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/apath")}>a로 가기</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/bpath")}>B로 가기</Button>
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
