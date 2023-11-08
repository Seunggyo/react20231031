import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    axios
      .get("/api/main1/sub3")
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Customer id : {customer.id}</h1>
      <h1>Customer name : {customer.customerName}</h1>
      <h1>Contract name :{customer.contactName}</h1>
      <h1>Customer address : {customer.address}</h1>
      <h1>Customer city : {customer.city}</h1>
      <h1>Customer postal code : {customer.postalCode}</h1>
      <h1>Customer country : {customer.country}</h1>
    </>
  );
}

export default App;
