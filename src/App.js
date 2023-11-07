import { createContext, useState } from "react";
import { MyInput } from "./MyInput";
import { MyText } from "./MyText";

function App() {
  const [string, setString] = useState("");
  return (
    <>
      <StringContext.Provider value={{ string, setString }}>
        <MyInput />
        <MyText />
      </StringContext.Provider>
    </>
  );
}

export const StringContext = createContext(null);

export default App;
