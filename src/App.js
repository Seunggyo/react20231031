import { Box, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [customerId, setCustomerId] = useState(0);
  const [cName, setCName] = useState("");
  useEffect(() => {
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCName(data))
      .catch((error) => console.log(error))
      .finally(() => console.log("끝"));
  }, [customerId]);
  return (
    <>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        <Text>고객 이름 : {cName.customerName}</Text>
      </Box>
    </>
  );
}

export default App;
