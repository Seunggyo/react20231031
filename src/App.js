import Box, { color as b } from "./component/Box";
import Container, { color } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: b }} />
      <Container style={{ color: color }} />
    </div>
  );
}

export default App;
