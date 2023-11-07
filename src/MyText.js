import { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { StringContext } from "./App";

export function MyText() {
  const value = useContext(StringContext);
  return <Text>메시지 출력할 위치 : {value.string}</Text>;
}
