import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);

  function handleButtonClick(food) {
    setFoods([...foods, food]);
  }

  function handleRemoveButtonClick(index) {
    // console.log(index);
    // const nextFoods = [...foods];
    // nextFoods.splice(index, 1);
    // const nextFoods = foods.filter((item,i) => i! index);
    // setFoods(nextFoods);

    setFoods(foods.filter((item, i) => i != index));
  }

  return (
    <>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("아이스크림")}>
        아이스크림
      </Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Box>
        <UnorderedList>
          {foods.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button onClick={() => handleRemoveButtonClick(index)}>
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
