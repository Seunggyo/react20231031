function App() {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold", //lowerCamelCase
    fontSize: "70px",
    textAlign: "center",
  }; //js object
  return (
    <>
      {/* 스타일 속성은 객체를 주어야 한다 */}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{
          color: "red",
          backgroundColor: "yellow",
          fontSize: "30px",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;
