import { Button, Input } from "@chakra-ui/react";

function App(props) {
  // 브라우저는 event handler method에
  // event 객체를 매개값으로 넣어줌
  let text = "initial text";

  // 변수값이 변경되어도 바로 dom에는 반영되지 않음
  function handleChange(e) {
    console.log(e.target.value);
    text = e.target.value;
  }

  return (
    <>
      <p>{text}</p>
      <Input onChange={handleChange} />
      <Button onClick={handleChange}>Button2</Button>
    </>
  );
}

export default App;
