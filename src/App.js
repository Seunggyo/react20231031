import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick() {
    // const newItems = [...items];
    // newItems.push(text);
    // setItems(newItems);
    setItems([...items, text]);
  }

  function handleRemoveButtonClick(index) {
    setItems(items.filter((item, i) => i != index));
  }

  return (
    <>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={handleButtonClick}>추가</Button>
      </Box>
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button
                colorScheme="red"
                onClick={() => handleRemoveButtonClick(index)}
              >
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </>
  );
}

export default App;
