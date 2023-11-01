import age, { city } from "./component/MyElem";
import MyBox, { country, person } from "./component/MyBox";

function App() {
  return (
    <>
      <h1>{city}</h1>
      <h1>{age}</h1>
      <MyBox />
      <h1>{person.name}</h1>
      <h1>{country}</h1>
    </>
  );
}

export default App;
