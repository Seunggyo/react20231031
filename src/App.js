import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [customerId, setCustomerId] = useState(0);
  const [cName, setCName] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [customerIdList, setCustomerIdList] = useState([]);
  useEffect(() => {
    // 고객 번호 가져오기
    axios
      .get("/api/main1/sub6")
      .then((Response) => setCustomerIdList(Response.data));
  }, []);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCName(data))
      .catch((error) => {
        setCName(null);
      })
      .finally(() => setIsLoading(false));
  }, [customerId]);
  return (
    <>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {customerIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {isLoading && <Spinner />}

        {isLoading || (
          <>
            {cName === null && (
              <Text>조회한 고객이 없습니다. 다른번호를 선택해주세요</Text>
            )}
            {cName !== null && <Text>고객 이름 : {cName.customerName}</Text>}
          </>
        )}
      </Box>
    </>
  );
}

export default App;
