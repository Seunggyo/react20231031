import {MyElem} from "./component/MyElem";
import {MyComp} from "./component/MyComp"; // export된 컴포넌트(변수, 함수, 객체)를  import 다다

// export된 컴포넌트(변수, 함수, 객체)를  import 다다
function App() {
  return (
    <>
      <MyComp />
      <MyElem />
    </>
  );
}

// {value: "흥민", address: "신촌"

export default App;
