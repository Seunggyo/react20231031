import { Box, List, ListItem } from "@chakra-ui/react";

function App() {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "에스프레소", "카푸치노"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
    { id: 2, name: "카푸치노" },
  ];

  const listItem = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  const listItem2 = arr2.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  return (
    <>
      <List>{listItem}</List>
      <List>{listItem2}</List>
      <Box mb={3}>
        <List>
          {arr3.map((e, index) => (
            <ListItem key={index}>{e}</ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default App;
