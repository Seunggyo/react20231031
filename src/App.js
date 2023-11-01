function App() {
  return (
    <div>
      <MyComp m="40px" p="20px" color="white" bg="silver" text="hello world" />
      <MyComp m="20px" p="5px" color="gold" bg="black" />
      <MyComp m="10px" color="green" text="hello java" />
      <MyComp p="30px" />
      <MyComp />
    </div>
  );
}

function MyComp({
  m = "30px",
  p = "10px",
  color = "black",
  bg = "gold",
  text = "hello react",
}) {
  return (
    <div style={{ margin: m, padding: p, color: color, backgroundColor: bg }}>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
