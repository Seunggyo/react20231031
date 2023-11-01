import MyBox, {address as yourAddress,} from "./component/MyBox";
import MyElem, {address as myAddress} from "./component/MyElem";

// as 로 named export 값을 import 할 때 별칭을 줄 수 있음
function App() {
  return (
    <>
      <MyBox />
      <MyElem />
      <h1>{yourAddress}</h1>
      <h1>{myAddress}</h1>
      <h1></h1>
    </>
  );
}

export default App;
