import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Box>홈페이지</Box>} />
      <Route path="/path1" element={<Box>경로1</Box>} />
      <Route path="/path2" element={<Box>경로2</Box>} />
      <Route path="/path3" element={<Box>경로3</Box>} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
