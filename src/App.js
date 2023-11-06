import { Button, Input, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [coffees, setCoffees] = useState([]);
  const [text, setText] = useState("");

  function handleButtonClick() {
    // 직전 상태 배열을 조작하면 안되고
    //coffees.push(text);

    // 새 배열을 만들어서 set state 해야 한다.
    const newCoffees = [...coffees];
    newCoffees.push(text);
    setCoffees(newCoffees);
    console.log(coffees);
  }

  return (
    <>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleButtonClick}>추가</Button>
      <List>
        {coffees.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
