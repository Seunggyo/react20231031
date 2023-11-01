import { MyText } from "./component/MyText";
import { MyBlock } from "./component/MyBlock";
import * as React from "react";
import { Avatar, ChakraProvider, Kbd } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <span>
          <Kbd>control</Kbd> + <Kbd>C</Kbd>
        </span>
        <Avatar name="KSG" />
        <MyText />
        <MyBlock />
      </div>
    </ChakraProvider>
  );
}

export default App;
