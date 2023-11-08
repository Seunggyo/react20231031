import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  NumberInput,
  NumberInputField,
  Spinner,
  Text,
} from "@chakra-ui/react";

function App() {
  const [eId, setEId] = useState(0);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + eId)
      .then((Response) => Response.data)
      .then((data) => setEmployee(data))
      .catch(() => setEmployee(null))
      .finally(() => setIsLoading(false));
  }, [eId]);
  // 직원 번호를 선택하면 직원의 이름이 출력
  // /api/main1/sub5?id=
  // spring boot의 메소드도 작성하기

  let textContent;

  if (eId === 0 || eId === null) {
    textContent = null;
  } else {
    if (employee === null) {
      textContent = (
        <Text>해당 직원의 번호가 없습니다. 다른 번호를 입력해보세요</Text>
      );
    } else {
      textContent = (
        <Text>
          해당 직원의 이름 : {employee.lastName} {employee.firstName}
        </Text>
      );
    }
  }

  return (
    <>
      <Box>
        <NumberInput min={1}>
          <NumberInputField
            placeholder="직원의 번호를 입력해주세요"
            onChange={(e) => setEId(e.target.value)}
          />
        </NumberInput>
        <Box>
          {isLoading && <Spinner />}
          {isLoading || textContent}
        </Box>
      </Box>
    </>
  );
}

export default App;
