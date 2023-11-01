import {
  address,
  MyBox,
  MyContainer,
  MyElem,
  name,
  person,
} from "./component/MyBox";

function App() {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <>
      <MyBox />
      <MyElem />
      <MyContainer />
    </>
  );
}

// {value: "흥민", address: "신촌"

export default App;
