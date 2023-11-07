import { useContext } from "react";
import { Input } from "@chakra-ui/react";
import { StringContext } from "./App";

export function MyInput() {
  const value = useContext(StringContext);
  return <Input onChange={(e) => value.setString(e.target.value)} />;
}
