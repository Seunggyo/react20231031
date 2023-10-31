function App() {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const name = "흥민";
  return (
    <div style={{ background: "blue", color: "white", padding: "10px" }}>
      {name}
    </div>
  );
}

export default App;
