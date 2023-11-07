import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MessageContext } from "./App";

export function AComp() {
  // 3. context 사용하기 : useContext(context)

  const { setMessage } = useContext(MessageContext);

  return <Button onClick={() => setMessage("변경된 메시지")}>변경 버튼</Button>;
}
