import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("/api/main1/sub2")
      .then((response) => response.data)
      .then((data) => setMessage(data))
      .catch((error) => console.log(error));
  }, []);
  return <>{message}</>;
}

export default App;
